// Table-based layout with inline styles — the only approach that renders
// consistently across Gmail, Outlook and mobile mail clients.

const COLORS = {
  orange: "#e07a1f",
  orangeDark: "#b8600f",
  ink: "#17140f",
  muted: "#5a544a",
  cream: "#f7f5f1",
  sand: "#f1e9d8",
  forest: "#2f4a3a",
  border: "#e6e0d3",
};

const FONT = "'Segoe UI', Helvetica, Arial, sans-serif";
const DISPLAY_FONT = "Georgia, 'Times New Roman', serif";

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export type EmailRow = { label: string; value: string; highlight?: boolean };
export type EmailSection = { title: string; rows: EmailRow[] };

function renderRows(rows: EmailRow[]): string {
  return rows
    .map((row) => {
      const valueStyle = row.highlight
        ? `font-family:${DISPLAY_FONT};font-size:18px;font-weight:bold;color:${COLORS.orange};`
        : `font-size:14px;font-weight:600;color:${COLORS.ink};`;
      return `<tr>
  <td style="padding:9px 0;border-bottom:1px solid ${COLORS.border};font-size:13px;color:${COLORS.muted};vertical-align:top;width:38%;">${escapeHtml(row.label)}</td>
  <td style="padding:9px 0;border-bottom:1px solid ${COLORS.border};${valueStyle}vertical-align:top;text-align:right;white-space:pre-line;">${escapeHtml(row.value)}</td>
</tr>`;
    })
    .join("\n");
}

function renderSection(section: EmailSection): string {
  return `<tr><td style="padding:28px 32px 0 32px;">
  <h2 style="margin:0 0 6px 0;font-family:${DISPLAY_FONT};font-size:18px;font-weight:normal;color:${COLORS.forest};">${escapeHtml(section.title)}</h2>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
${renderRows(section.rows)}
  </table>
</td></tr>`;
}

function renderLayout({
  preheader,
  eyebrow,
  title,
  intro,
  sections,
  actions,
}: {
  preheader: string;
  eyebrow: string;
  title: string;
  intro: string;
  sections: EmailSection[];
  actions: { label: string; href: string; primary?: boolean }[];
}): string {
  const buttons = actions
    .map(
      (action) =>
        `<a href="${escapeHtml(action.href)}" style="display:inline-block;margin:0 6px 8px 0;padding:12px 24px;border-radius:999px;font-size:14px;font-weight:600;text-decoration:none;${
          action.primary
            ? `background:${COLORS.orange};color:#ffffff;`
            : `background:#ffffff;color:${COLORS.ink};border:1px solid ${COLORS.border};`
        }">${escapeHtml(action.label)}</a>`
    )
    .join("");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:${COLORS.cream};font-family:${FONT};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.cream};">
<tr><td align="center" style="padding:32px 12px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid ${COLORS.border};">
    <tr><td style="background:${COLORS.forest};padding:28px 32px;">
      <p style="margin:0;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#f6a949;">${escapeHtml(eyebrow)}</p>
      <h1 style="margin:10px 0 0 0;font-family:${DISPLAY_FONT};font-size:26px;line-height:1.25;font-weight:normal;color:#ffffff;">${escapeHtml(title)}</h1>
    </td></tr>
    <tr><td style="height:4px;background:${COLORS.orange};font-size:0;line-height:0;">&nbsp;</td></tr>
    <tr><td style="padding:28px 32px 0 32px;">
      <p style="margin:0;font-size:15px;line-height:1.6;color:${COLORS.muted};">${intro}</p>
    </td></tr>
${sections.map(renderSection).join("\n")}
    <tr><td style="padding:28px 32px 20px 32px;">${buttons}</td></tr>
    <tr><td style="background:${COLORS.sand};padding:18px 32px;">
      <p style="margin:0;font-size:12px;line-height:1.5;color:${COLORS.muted};">Sent automatically from the Yala Leopard Safari Tours website. Reply to this email to respond directly to the customer.</p>
    </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`;
}

function renderText(title: string, sections: EmailSection[]): string {
  return [
    title,
    "",
    ...sections.flatMap((section) => [
      section.title.toUpperCase(),
      ...section.rows.map((row) => `${row.label}: ${row.value}`),
      "",
    ]),
  ].join("\n");
}

function whatsappHref(phone: string): string {
  const digits = phone.replace(/[^0-9]/g, "");
  return digits ? `https://wa.me/${digits}` : "https://wa.me/94760915578";
}

export type BookingEmailData = {
  reference: string;
  parkName: string;
  packageName: string;
  startTime: string;
  date: string;
  adults: number;
  children: number;
  infants: number;
  pickup: string;
  pickupNotes: string;
  addOns: string[];
  specialRequest: string;
  paymentOption: "full" | "deposit";
  breakdown: { packageCharge: string; entranceTickets: string; extrasCharge: string; total: string };
  dueNow: string;
  remainingBalance: string;
  customer: { name: string; email: string; phone: string; country: string };
};

export function buildBookingEmail(data: BookingEmailData) {
  const guests =
    `${data.adults} Adults` +
    (data.children ? `, ${data.children} Children` : "") +
    (data.infants ? `, ${data.infants} Infants` : "");

  const sections: EmailSection[] = [
    {
      title: "Customer",
      rows: [
        { label: "Name", value: data.customer.name },
        { label: "Email", value: data.customer.email },
        { label: "Phone / WhatsApp", value: data.customer.phone },
        { label: "Country", value: data.customer.country || "—" },
      ],
    },
    {
      title: "Safari Details",
      rows: [
        { label: "Park", value: data.parkName },
        { label: "Package", value: data.packageName },
        { label: "Date", value: data.date || "To be confirmed" },
        { label: "Start time", value: data.startTime },
        { label: "Guests", value: guests },
        { label: "Pickup", value: data.pickup },
        ...(data.pickupNotes ? [{ label: "Pickup notes", value: data.pickupNotes }] : []),
        { label: "Add-ons", value: data.addOns.length ? data.addOns.join(", ") : "None" },
        ...(data.specialRequest ? [{ label: "Special request", value: data.specialRequest }] : []),
      ],
    },
    {
      title: "Pricing",
      rows: [
        { label: "Safari / package", value: data.breakdown.packageCharge },
        { label: "Entrance tickets", value: data.breakdown.entranceTickets },
        { label: "Meals / extras", value: data.breakdown.extrasCharge },
        { label: "Total", value: data.breakdown.total, highlight: true },
        {
          label: "Customer's payment preference",
          value: data.paymentOption === "deposit" ? "50% deposit" : "Pay in full",
        },
        { label: "Amount due now", value: data.dueNow },
        ...(data.paymentOption === "deposit"
          ? [{ label: "Remaining balance", value: data.remainingBalance }]
          : []),
      ],
    },
  ];

  const title = `New booking request — ${data.parkName}`;

  return {
    subject: `New Booking ${data.reference} — ${data.customer.name} (${data.parkName}, ${data.date || "date TBC"})`,
    html: renderLayout({
      preheader: `${data.customer.name} · ${data.packageName} · ${data.date || "date TBC"} · ${data.breakdown.total}`,
      eyebrow: `Booking ${data.reference}`,
      title,
      intro: `A new booking request has just come in from <strong style="color:${COLORS.ink};">${escapeHtml(
        data.customer.name
      )}</strong>. No payment has been taken online — please contact the customer to confirm availability and arrange payment.`,
      sections,
      actions: [
        { label: "Reply by email", href: `mailto:${data.customer.email}`, primary: true },
        { label: "WhatsApp customer", href: whatsappHref(data.customer.phone) },
      ],
    }),
    text: renderText(`${title} (${data.reference})`, sections),
  };
}

export type ContactEmailData = {
  name: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  travelDate: string;
  pickupLocation: string;
  adults: string;
  children: string;
  infants: string;
  message: string;
};

export function buildContactEmail(data: ContactEmailData) {
  const guests = `${data.adults || 0} Adults, ${data.children || 0} Children, ${data.infants || 0} Infants`;

  const sections: EmailSection[] = [
    {
      title: "Contact",
      rows: [
        { label: "Name", value: data.name },
        { label: "Email", value: data.email },
        { label: "Phone / WhatsApp", value: data.phone },
        { label: "Country", value: data.country || "—" },
      ],
    },
    {
      title: "Trip Details",
      rows: [
        { label: "Service", value: data.service },
        { label: "Travel date", value: data.travelDate || "Not specified" },
        { label: "Pickup location", value: data.pickupLocation || "Not specified" },
        { label: "Guests", value: guests },
      ],
    },
    {
      title: "Message",
      rows: [{ label: "Customer message", value: data.message || "No message provided." }],
    },
  ];

  const title = `New enquiry — ${data.service}`;

  return {
    subject: `New Enquiry — ${data.name} (${data.service})`,
    html: renderLayout({
      preheader: `${data.name} · ${data.service}`,
      eyebrow: "Contact form",
      title,
      intro: `<strong style="color:${COLORS.ink};">${escapeHtml(
        data.name
      )}</strong> has sent an enquiry through the website contact form.`,
      sections,
      actions: [
        { label: "Reply by email", href: `mailto:${data.email}`, primary: true },
        { label: "WhatsApp customer", href: whatsappHref(data.phone) },
      ],
    }),
    text: renderText(title, sections),
  };
}
