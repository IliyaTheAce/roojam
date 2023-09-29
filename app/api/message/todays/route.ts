import ContactUsMessage from "@/lib/Models/ContactUsMessage";
import { connectToDataBase } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDataBase();
  try {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    return NextResponse.json(
      await ContactUsMessage.count({ time: { $gte: start } })
    );
  } catch (error: any) {
    return NextResponse.json(-1);
  }
}
