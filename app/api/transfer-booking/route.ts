import { NextResponse } from "next/server";
import { randomBytes } from "node:crypto";
import { sendNotificationEmail } from "@/lib/email/mailer";
import { buildTransferEmail } from "@/lib/email/templates";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VEHICLES = ["Sedan", "Van", "SUV"];

const SERVICES = {
  taxi: { label: "Taxi & Car Rental", prefix: "TAX" },
  hambantota: { label: "Hambantota to Yala Transfer", prefix: "HAM" },
} as const;

function field(body: Record<string, unknown>, key: string, maxLength = 200): string {
  const value = body[key];
  return typeof value === "string" ? value.replace(/[\r\n]+/g, " ").trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot: real users never see or fill this field.
  if (field(body, "website")) {
    return NextResponse.json({ ok: true });
  }

  const type = body.type === "taxi" || body.type === "hambantota" ? body.type : null;
  if (!type) {
    return NextResponse.json({ error: "Unknown booking type" }, { status: 400 });
  }
  const service = SERVICES[type];

  const firstName = field(body, "firstName", 100);
  const lastName = field(body, "lastName", 100);
  const emailAddress = field(body, "email");
  const phone = field(body, "phone", 40);
  const pickupLocation = field(body, "pickupLocation");
  const dropoffLocation = type === "hambantota" ? "Yala" : field(body, "dropoffLocation");
  const date = field(body, "date", 30);
  const passengers = Number(field(body, "passengers", 4));

  if (!firstName || !lastName || !emailAddress || !phone || !pickupLocation || !dropoffLocation || !date) {
    return NextResponse.json({ error: "Please fill in all required fields" }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(emailAddress)) {
    return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
  }
  if (!Number.isInteger(passengers) || passengers < 1 || passengers > 20) {
    return NextResponse.json({ error: "Please enter a valid number of passengers" }, { status: 400 });
  }

  const vehicle = type === "taxi" ? field(body, "vehicle", 30) : "";
  if (type === "taxi" && !VEHICLES.includes(vehicle)) {
    return NextResponse.json({ error: "Please choose a vehicle" }, { status: 400 });
  }

  const reference = `YLS-${service.prefix}-${randomBytes(3).toString("hex").toUpperCase()}`;
  const email = buildTransferEmail({
    reference,
    service: service.label,
    vehicle,
    customer: {
      name: `${firstName} ${lastName}`,
      email: emailAddress,
      phone,
      country: field(body, "country", 100),
    },
    pickupLocation,
    dropoffLocation,
    date,
    time: field(body, "time", 20),
    passengers: String(passengers),
    roundTrip: body.roundTrip === true || body.roundTrip === "on",
    notes: typeof body.notes === "string" ? body.notes.trim().slice(0, 2000) : "",
  });

  try {
    await sendNotificationEmail({ ...email, replyTo: emailAddress });
  } catch (error) {
    console.error("Transfer booking email failed:", error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: "We couldn't send your booking request. Please try again or contact us on WhatsApp." },
      { status: 500 }
    );
  }

  return NextResponse.json({ reference });
}
