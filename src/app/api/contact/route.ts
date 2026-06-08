import { Resend } from "resend";

// Update these with real values before deploying
const STORE_EMAIL = process.env.STORE_EMAIL ?? "owner@winchesterpackandship.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "noreply@winchesterpackandship.com";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json();
  const { name, email, phone, service, message } = body;

  if (!name || !email || !service) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  const serviceLabels: Record<string, string> = {
    shipping: "Shipping (UPS / FedEx / USPS)",
    packing: "Custom Packing",
    printing: "Printing",
    mailbox: "Mailbox Services",
    other: "Other / Not Sure",
  };

  const html = `
    <h2>New Quote Request — Winchester Pack & Ship</h2>
    <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
      <tr><td style="padding:8px;font-weight:bold;color:#555">Name</td><td style="padding:8px">${name}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;color:#555">Email</td><td style="padding:8px">${email}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;color:#555">Phone</td><td style="padding:8px">${phone || "—"}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;color:#555">Service</td><td style="padding:8px">${serviceLabels[service] ?? service}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;color:#555;vertical-align:top">Details</td><td style="padding:8px">${message || "—"}</td></tr>
    </table>
  `;

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: STORE_EMAIL,
    replyTo: email,
    subject: `Quote Request from ${name}`,
    html,
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ success: true });
}
