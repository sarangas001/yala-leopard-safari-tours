import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/email/mailer";
import { buildReviewEmail } from "@/lib/email/templates";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_PHOTO_BYTES = 5 * 1024 * 1024;

function field(form: FormData, key: string, maxLength = 200): string {
  const value = form.get(key);
  return typeof value === "string" ? value.replace(/[\r\n]+/g, " ").trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot: real users never see or fill this field.
  if (field(form, "website")) {
    return NextResponse.json({ ok: true });
  }

  const name = field(form, "name", 100);
  const emailAddress = field(form, "email");
  const service = field(form, "service");
  const rating = field(form, "rating", 30);
  const reviewValue = form.get("review");
  const review = typeof reviewValue === "string" ? reviewValue.trim().slice(0, 5000) : "";

  if (!name || !emailAddress || !service || !rating || !review || !form.get("consent")) {
    return NextResponse.json({ error: "Please fill in all required fields" }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(emailAddress)) {
    return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
  }

  const photo = form.get("photo");
  let attachments: { filename: string; content: Buffer; contentType?: string }[] | undefined;
  if (photo instanceof File && photo.size > 0) {
    if (!photo.type.startsWith("image/")) {
      return NextResponse.json({ error: "Please upload an image file" }, { status: 400 });
    }
    if (photo.size > MAX_PHOTO_BYTES) {
      return NextResponse.json({ error: "Photo must be smaller than 5MB" }, { status: 400 });
    }
    attachments = [
      {
        filename: photo.name.replace(/[^\w.\- ]/g, "_") || "review-photo",
        content: Buffer.from(await photo.arrayBuffer()),
        contentType: photo.type,
      },
    ];
  }

  const email = buildReviewEmail({
    name,
    email: emailAddress,
    service,
    rating,
    review,
    hasPhoto: Boolean(attachments),
  });

  try {
    await sendNotificationEmail({ ...email, replyTo: emailAddress, attachments });
  } catch (error) {
    console.error("Review email failed:", error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: "We couldn't submit your review. Please try again or contact us on WhatsApp." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
