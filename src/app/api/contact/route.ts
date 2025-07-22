import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const {
    name,
    email,
    phone,
    preferredContact,
    bestTime,
    message,
    consent,
  } = await req.json();

  if (!name || !email || !message || !consent) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const to = process.env.CONTACT_RECEIVER_EMAIL;

  if (!user || !pass || !to) {
    return NextResponse.json({ error: "Missing email credentials." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const emailBody = `
📨 New Contact Submission

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone || "Not provided"}
💬 Message:
${message}
  `;

  try {
    await transporter.sendMail({
      from: user,
      to,
      subject: `New Contact Submission from ${name}`,
      text: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email sending failed:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
