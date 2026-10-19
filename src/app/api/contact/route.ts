import { Resend } from "resend";

const STORE_EMAIL = process.env.STORE_EMAIL ?? "owner@winchesterpackandship.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "noreply@winchesterpackandship.com";

const ALLOWED_SERVICES = new Set(["shipping", "packing", "printing", "mailbox", "other"]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(val: unknown): string {
  if (typeof val !== "string") return "";
  return val.trim().slice(0, 1000);
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
  const service = sanitize(raw.service);
  const message = sanitize(raw.message);

  const errors: string[] = [];

  if (!name)                          errors.push("Name is required.");
  else if (name.length < 2)           errors.push("Name must be at least 2 characters.");

  if (!email)                         errors.push("Email is required.");
  else if (!EMAIL_RE.test(email))     errors.push("Please enter a valid email address.");

  if (phone && !/^[\d\s\-().+]+$/.test(phone)) errors.push("Phone number contains invalid characters.");

  if (!service)                       errors.push("Please select a service.");
  else if (!ALLOWED_SERVICES.has(service)) errors.push("Invalid service selection.");

  if (message.length > 2000)          errors.push("Message must be under 2000 characters.");

  if (errors.length > 0) {
    return Response.json({ error: errors.join(" ") }, { status: 422 });
  }

  const serviceLabels: Record<string, string> = {
    shipping: "Shipping (UPS / FedEx / USPS)",
    packing:  "Custom Packing",
    printing: "Printing",
    mailbox:  "Mailbox Services",
    other:    "Other / Not Sure",
  };

  const html = `
    <h2>New Contact — Winchester Pack &amp; Ship</h2>
    <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
      <tr><td style="padding:8px;font-weight:bold;color:#555">Name</td><td style="padding:8px">${name}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;color:#555">Email</td><td style="padding:8px">${email}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;color:#555">Phone</td><td style="padding:8px">${phone || "—"}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;color:#555">Service</td><td style="padding:8px">${serviceLabels[service]}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;color:#555;vertical-align:top">Details</td><td style="padding:8px">${message || "—"}</td></tr>
    </table>
  `;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: STORE_EMAIL,
    replyTo: email,
    subject: `Message from ${name} — Winchester Pack & Ship`,
    html,
  });

  if (error) {
    return Response.json({ error: "Failed to send message. Please call us directly." }, { status: 500 });
  }

  return Response.json({ success: true });
}
