import { connectToDataBase } from "@/lib/mongoose";
import ContactUsMessage from "@/lib/Models/ContactUsMessage";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest } from "next";

export async function POST(req: Request) {
  const { title, composer, phone, content, email } = await req.json();
  if (!title || !composer || !phone || !content || !email) {
    return NextResponse.json({
      result: false,
      forceMessage: "All fields are required",
    });
  }
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
    return NextResponse.json({ result: true });
  } catch (error: any) {
    return NextResponse.json({ result: false, forceMessage: error.message });
  }
}
