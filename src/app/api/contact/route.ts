import { Resend } from "resend";

const TO_EMAIL = "gus.42code@gmail.com";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  let body: Record<string, string>;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, message, company, interest } = body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return Response.json({ error: "Name is required" }, { status: 422 });
  }
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return Response.json({ error: "Valid email is required" }, { status: 422 });
  }
  if (!message || typeof message !== "string" || message.trim() === "") {
    return Response.json({ error: "Message is required" }, { status: 422 });
  }

  const html = `
    <table style="font-family: sans-serif; font-size: 14px; color: #1A1A1A; border-collapse: collapse; width: 100%;">
      <tr><td style="padding: 8px 0; font-weight: bold; width: 140px; vertical-align: top;">Name</td><td style="padding: 8px 0;">${escapeHtml(name)}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Company</td><td style="padding: 8px 0;">${escapeHtml(company ?? "—")}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Interest</td><td style="padding: 8px 0;">${escapeHtml(interest ?? "—")}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message</td><td style="padding: 8px 0; white-space: pre-wrap;">${escapeHtml(message)}</td></tr>
    </table>
  `;

  try {
    const { error } = await resend.emails.send({
      from: "Yalla Capital <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New contact from ${name} — Yalla Capital`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send email" }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
