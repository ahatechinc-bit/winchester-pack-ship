import { Resend } from "resend";

const STORE_EMAIL = process.env.STORE_EMAIL ?? "owner@winchesterpackandship.com";
const FROM_EMAIL  = process.env.FROM_EMAIL  ?? "noreply@winchesterpackandship.com";

const ALLOWED_SIZES = new Set(["small", "medium", "large", "unsure"]);
const ALLOWED_TERMS = new Set(["monthly", "3months", "6months", "1year", "unsure"]);
const ALLOWED_USE   = new Set(["personal", "business"]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(val: unknown, max = 500): string {
  if (typeof val !== "string") return "";
  return val.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;

  const name    = sanitize(raw.name);
  const email   = sanitize(raw.email);
  const phone   = sanitize(raw.phone);
  const use     = sanitize(raw.use);
  const size    = sanitize(raw.size);
  const term    = sanitize(raw.term);
  const notes   = sanitize(raw.notes, 2000);

  const errors: string[] = [];

  if (!name || name.length < 2)        errors.push("Full name is required (min 2 characters).");
  if (!email)                           errors.push("Email address is required.");
  else if (!EMAIL_RE.test(email))       errors.push("Please enter a valid email address.");
  if (phone && !/^[\d\s\-().+]+$/.test(phone)) errors.push("Phone number contains invalid characters.");
  if (!use   || !ALLOWED_USE.has(use))   errors.push("Please select personal or business use.");
  if (!size  || !ALLOWED_SIZES.has(size)) errors.push("Please select a box size.");
  if (!term  || !ALLOWED_TERMS.has(term)) errors.push("Please select a rental term.");
  if (notes.length > 2000)              errors.push("Notes must be under 2000 characters.");

  if (errors.length > 0) {
    return Response.json({ error: errors.join(" ") }, { status: 422 });
  }

  const sizeLabels: Record<string, string> = {
    small: "Small",
    medium: "Medium",
    large: "Large",
    unsure: "Not sure yet",
  };
  const termLabels: Record<string, string> = {
    monthly: "Month-to-month",
    "3months": "3 months",
    "6months": "6 months",
    "1year": "1 year",
    unsure: "Not sure yet",
  };

  const html = `
    <h2>New Mailbox Rental Inquiry — Winchester Pack &amp; Ship</h2>
    <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
      <tr><td style="padding:8px;font-weight:bold;color:#555">Name</td><td style="padding:8px">${name}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;color:#555">Email</td><td style="padding:8px">${email}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;color:#555">Phone</td><td style="padding:8px">${phone || "—"}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;color:#555">Use</td><td style="padding:8px">${use === "business" ? "Business" : "Personal"}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;color:#555">Box Size</td><td style="padding:8px">${sizeLabels[size]}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;color:#555">Term</td><td style="padding:8px">${termLabels[term]}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;color:#555;vertical-align:top">Notes</td><td style="padding:8px">${notes || "—"}</td></tr>
    </table>
  `;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: STORE_EMAIL,
    replyTo: email,
    subject: `Mailbox Rental Inquiry from ${name}`,
    html,
  });

  if (error) {
    return Response.json({ error: "Failed to send inquiry. Please call us directly." }, { status: 500 });
  }

  return Response.json({ success: true });
}
