import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";

let transporter: Mail | undefined;

function getTransporter(): Mail {
  if (transporter) return transporter;

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass || !process.env.NOTIFICATION_EMAIL) {
    throw new Error("GMAIL_USER, GMAIL_APP_PASSWORD and NOTIFICATION_EMAIL must be set");
  }

  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });
  return transporter;
}

export async function sendNotificationEmail({
  subject,
  html,
  text,
  replyTo,
}: {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}) {
  await getTransporter().sendMail({
    from: `"Yala Leopard Safari Website" <${process.env.GMAIL_USER}>`,
    to: process.env.NOTIFICATION_EMAIL,
    replyTo,
    subject,
    html,
    text,
  });
}
