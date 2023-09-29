import ContactUsMessage from "@/lib/Models/ContactUsMessage";
import { connectToDataBase } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDataBase();
  try {
    return NextResponse.json(
      await ContactUsMessage.count({ read: { $not: { $eq: true } } })
    );
  } catch (error: any) {
    return NextResponse.json(-1);
  }
}
