import { NextResponse } from "next/server";
import { randomBytes } from "node:crypto";
import { getPark } from "@/lib/parks";
import { getPackage, calculateBreakdown, formatUsd, resolveStartTime } from "@/lib/booking/pricing";
import { sendNotificationEmail } from "@/lib/email/mailer";
import { buildBookingEmail } from "@/lib/email/templates";

export const runtime = "nodejs";

const MAX_GUESTS = 20;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PARK_NAMES: Record<string, string> = {
  yala: "Yala National Park",
  udawalawe: "Udawalawe National Park",
  bundala: "Bundala National Park",
  lunugamvehera: "Lunugamvehera National Park",
};

type BookingRequestBody = {
  park: string;
  packageName: string;
  date: string;
  adults: number;
  children: number;
  infants: number;
  entranceTickets: boolean;
  session?: string;
  pickupType: "hotel" | "undecided";
  hotelName: string;
  pickupNotes: string;
  specialRequest: string;
  paymentOption: "full" | "deposit";
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    countryCode: string;
    phone: string;
  };
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function clean(value: unknown, maxLength = 500): string {
  return typeof value === "string" ? value.replace(/[\r\n]+/g, " ").trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let body: BookingRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!isNonEmptyString(body.park)) {
    return NextResponse.json({ error: "Missing park" }, { status: 400 });
  }
  const park = getPark(body.park);
  if (!park) {
    return NextResponse.json({ error: "Unknown park" }, { status: 400 });
  }

  const selectedPackage = getPackage(body.park, body.packageName);
  if (!selectedPackage) {
    return NextResponse.json({ error: "Unknown safari package" }, { status: 400 });
  }

  const adults = Number(body.adults);
  const children = Number(body.children);
  const infants = Number(body.infants);
  if (
    !Number.isInteger(adults) ||
    !Number.isInteger(children) ||
    !Number.isInteger(infants) ||
    adults < 1 ||
    children < 0 ||
    infants < 0 ||
    adults + children + infants > MAX_GUESTS
  ) {
    return NextResponse.json({ error: "Invalid guest counts" }, { status: 400 });
  }

  // Packages with several sessions (e.g. Morning/Evening half-day) need a valid pick.
  const session = clean(body.session, 50);
  if (selectedPackage.timeOptions && !selectedPackage.timeOptions.some((o) => o.label === session)) {
    return NextResponse.json({ error: "Please choose a start time for this safari" }, { status: 400 });
  }

  const customer = body.customer;
  if (
    !customer ||
    !isNonEmptyString(customer.firstName) ||
    !isNonEmptyString(customer.lastName) ||
    !isNonEmptyString(customer.email) ||
    !isNonEmptyString(customer.phone)
  ) {
    return NextResponse.json({ error: "Missing customer details" }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(customer.email.trim())) {
    return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
  }

  const paymentOption = body.paymentOption === "deposit" ? "deposit" : "full";
  const entranceTickets = Boolean(body.entranceTickets);

  const breakdown = calculateBreakdown({ adults, children, entranceTickets }, selectedPackage);
  if (breakdown.total <= 0) {
    return NextResponse.json({ error: "Unable to calculate a valid total for this selection" }, { status: 400 });
  }

  const dueNow = paymentOption === "deposit" ? breakdown.total / 2 : breakdown.total;
  const remainingBalance = breakdown.total - dueNow;
  const pickupType = body.pickupType === "undecided" ? "undecided" : "hotel";
  const hotelName = clean(body.hotelName);

  const reference = `YLS-${park.slug.slice(0, 3).toUpperCase()}-${randomBytes(3).toString("hex").toUpperCase()}`;
  const customerName = `${clean(customer.firstName, 100)} ${clean(customer.lastName, 100)}`;
  const phone = `${clean(customer.countryCode, 8)} ${clean(customer.phone, 30)}`.trim();

  const email = buildBookingEmail({
    reference,
    parkName: PARK_NAMES[body.park] ?? body.park,
    packageName: selectedPackage.name,
    startTime: resolveStartTime(selectedPackage, session),
    date: clean(body.date, 50),
    adults,
    children,
    infants,
    pickup: pickupType === "hotel" ? hotelName || "Hotel pickup (name not provided)" : "Not decided yet",
    pickupNotes: clean(body.pickupNotes, 1000),
    specialRequest: typeof body.specialRequest === "string" ? body.specialRequest.trim().slice(0, 2000) : "",
    paymentOption,
    breakdown: {
      packageCharge: formatUsd(breakdown.packageCharge),
      entranceTickets: formatUsd(breakdown.entranceTickets),
      total: formatUsd(breakdown.total),
    },
    dueNow: formatUsd(dueNow),
    remainingBalance: formatUsd(remainingBalance),
    customer: {
      name: customerName,
      email: customer.email.trim(),
      phone,
      country: clean(customer.country, 100),
    },
  });

  try {
    await sendNotificationEmail({ ...email, replyTo: customer.email.trim() });
  } catch (error) {
    console.error("Booking email failed:", error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: "We couldn't send your booking request. Please try again or contact us on WhatsApp." },
      { status: 500 }
    );
  }

  return NextResponse.json({ reference });
}
