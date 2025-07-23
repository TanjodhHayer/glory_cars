import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const {
    role, // "customer" | "mechanic"
    name,
    contactName,
    email,
    phone,
    address,
    city,
    province,
    postalCode,
    message,
    consent,
  } = await req.json();

  // Basic validation:
  if (
    !role ||
    !name ||
    !email ||
    !message ||
    consent !== true ||
    (role === "mechanic" &&
      (!contactName || !address || !city || !province || !postalCode))
  ) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  // Separate receivers by role:
  const contactReceiverEmails: Record<string, string> = {
    customer: process.env.CONTACT_RECEIVER_CUSTOMER_EMAIL || "",
    mechanic: process.env.CONTACT_RECEIVER_MECHANIC_EMAIL || "",
  };

  const to =
    contactReceiverEmails[role.toLowerCase()] || process.env.CONTACT_RECEIVER_EMAIL;

  if (!user || !pass || !to) {
    return NextResponse.json(
      { error: "Missing email credentials." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  // Compose email subject & body:
  const emailSubject = `New ${role.charAt(0).toUpperCase() + role.slice(1)} Contact Submission from ${name}`;

  let emailBody = `
📨 New ${role.charAt(0).toUpperCase() + role.slice(1)} Contact Submission

👤 Name: ${name}
`;

  if (role === "mechanic") {
    emailBody += `🏢 Business Name: ${contactName}\n`;
    emailBody += `🏠 Address: ${address}\n`;
    emailBody += `🌆 City: ${city}\n`;
    emailBody += `🏞 Province/State: ${province}\n`;
    emailBody += `📮 Postal Code: ${postalCode}\n`;
  }

  emailBody += `
📧 Email: ${email}
📞 Phone: ${phone || "Not provided"}

💬 Message:
${message}
`;

  try {
    await transporter.sendMail({
      from: user,
      to,
      subject: emailSubject,
      text: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email sending failed:", err);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
