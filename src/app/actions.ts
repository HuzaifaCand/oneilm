"use server";

import { Resend } from "resend";

// Resend uses process.env.RESEND_API_KEY automatically if passed,
// but we pass it explicitly here just to be sure.
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: {
  name: string;
  contact: string;
  message: string;
}) {
  try {
    const { name, contact, message } = formData;

    const data = await resend.emails.send({
      from: "OneIlm Contact <form@oneilm.org>", // Note: Replace with your actual verified domain if you have one, e.g. hello@oneilm.org
      to: ["sh.syed.huzaifa@gmail.com"],
      subject: `New Teacher Lead: ${name}`,
      text: `Name: ${name}\nContact (Email/WhatsApp): ${contact}\n\nMessage:\n${message}`,
    });

    return { success: true, data };
  } catch (error: any) {
    console.error("Resend error:", error);
    return { success: false, error: error.message };
  }
}
