import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("Received request for contact form submission");

  try {
    const { name, email, phone, service } = await request.json();

    // Проверка наличия всех полей
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Настройка Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Должно быть указано в .env
        pass: process.env.EMAIL_PASS, // Должно быть указано в .env
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Формирование письма
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL, // Должно быть указано в .env
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Service:</strong> ${service}</p>`,
    };

    // Отправка письма
    await transporter.sendMail(mailOptions);

    console.log("Email successfully sent!");
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error sending email." },
      { status: 500 }
    );
  }
}
