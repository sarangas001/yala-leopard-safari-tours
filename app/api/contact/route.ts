import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/email/mailer";
import { buildContactEmail } from "@/lib/email/templates";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  const firstName = field(body, "firstName", 100);
  const lastName = field(body, "lastName", 100);
  const emailAddress = field(body, "email");
  const phone = field(body, "phone", 40);
  const service = field(body, "service");

  if (!firstName || !lastName || !emailAddress || !phone || !service) {
    return NextResponse.json({ error: "Please fill in all required fields" }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(emailAddress)) {
    return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
  }

  const message = typeof body.message === "string" ? body.message.trim().slice(0, 5000) : "";

  const email = buildContactEmail({
    name: `${firstName} ${lastName}`,
    email: emailAddress,
    phone,
    country: field(body, "country", 100),
    service,
    travelDate: field(body, "travelDate", 30),
    pickupLocation: field(body, "pickupLocation"),
    adults: field(body, "adults", 4),
    children: field(body, "children", 4),
    infants: field(body, "infants", 4),
    message,
  });

  try {
    await sendNotificationEmail({ ...email, replyTo: emailAddress });
  } catch (error) {
    console.error("Contact email failed:", error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: "We couldn't send your enquiry. Please try again or contact us on WhatsApp." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
