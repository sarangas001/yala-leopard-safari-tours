import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getPark } from "@/lib/parks";
import { getPackage, calculateBreakdown } from "@/lib/booking/pricing";
import { BOOKING_EXTRAS } from "@/lib/booking/extras";

const MAX_GUESTS = 20;

type CheckoutRequestBody = {
  park: string;
  packageName: string;
  date: string;
  adults: number;
  children: number;
  infants: number;
  entranceTickets: boolean;
  extras: string[];
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

export async function POST(request: Request) {
  let body: CheckoutRequestBody;
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

  const extraIds = Array.isArray(body.extras)
    ? body.extras.filter((id) => BOOKING_EXTRAS.some((extra) => extra.id === id))
    : [];

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

  const paymentOption = body.paymentOption === "deposit" ? "deposit" : "full";
  const entranceTickets = Boolean(body.entranceTickets);

  const breakdown = calculateBreakdown({ adults, children, entranceTickets, extras: extraIds }, selectedPackage);
  if (breakdown.total <= 0) {
    return NextResponse.json({ error: "Unable to calculate a valid total for this selection" }, { status: 400 });
  }

  const dueNow = paymentOption === "deposit" ? breakdown.total / 2 : breakdown.total;
  const remainingBalance = breakdown.total - dueNow;
  const amountCents = Math.round(dueNow * 100);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? new URL(request.url).origin;
  const pickupType = body.pickupType === "undecided" ? "undecided" : "hotel";

  const editParams = new URLSearchParams({
    package: body.packageName,
    date: body.date ?? "",
    adults: String(adults),
    children: String(children),
    infants: String(infants),
    entranceTickets: String(entranceTickets),
    extras: extraIds.join(","),
    pickupType,
    hotelName: body.hotelName ?? "",
    pickupNotes: body.pickupNotes ?? "",
  });

  try {
    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      customer_email: customer.email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: amountCents,
            product_data: {
              name:
                `${selectedPackage.name}` + (paymentOption === "deposit" ? " — 50% Deposit" : ""),
              description: `${park.slug} safari · ${body.date || "date to be confirmed"} · ${adults} Adults${
                children ? `, ${children} Children` : ""
              }${infants ? `, ${infants} Infants` : ""}`,
            },
          },
        },
      ],
      success_url: `${baseUrl}/book/${body.park}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/book/${body.park}/checkout?${editParams.toString()}&canceled=true`,
      metadata: {
        park: body.park,
        packageName: body.packageName,
        date: body.date ?? "",
        adults: String(adults),
        children: String(children),
        infants: String(infants),
        entranceTickets: String(entranceTickets),
        extras: extraIds.join(","),
        pickupType,
        hotelName: body.hotelName ?? "",
        pickupNotes: body.pickupNotes ?? "",
        specialRequest: body.specialRequest ?? "",
        paymentOption,
        packageCharge: breakdown.packageCharge.toFixed(2),
        entranceTicketsCharge: breakdown.entranceTickets.toFixed(2),
        extrasCharge: breakdown.extrasCharge.toFixed(2),
        total: breakdown.total.toFixed(2),
        dueNow: dueNow.toFixed(2),
        remainingBalance: remainingBalance.toFixed(2),
        customerFirstName: customer.firstName,
        customerLastName: customer.lastName,
        customerPhone: `${customer.countryCode ?? ""}${customer.phone}`,
        customerCountry: customer.country ?? "",
      },
    });

    if (!session.url) {
      return NextResponse.json({ error: "Failed to create checkout session" }, { status: 502 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout session creation failed:", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "Unable to start checkout" }, { status: 500 });
  }
}
