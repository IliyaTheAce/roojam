"use server";

import { connectToDataBase } from "@/lib/mongoose";
import ContactUsMessage from "@/lib/Models/ContactUsMessage";

export default async function SendMessageActions(
  title: string,
  content: string,
  phone: string,
  composer: string,
  email: string
) {
  await connectToDataBase();
  try {
    await ContactUsMessage.create({
      title,
      composer,
      phone,
      content,
      email,
      time: Date.now(),
    });
    return { result: true };
  } catch (error: any) {
    return { result: false, forceMessage: error.message };
  }
}
