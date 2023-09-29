import ContactUsMessage from "@/lib/Models/ContactUsMessage";
import { connectToDataBase } from "@/lib/mongoose";
import { Console } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: Request) {
  const { uid } = await req.json();
  if (!uid) {
    return NextResponse.json({
      result: false,
      forcemessage: "uid is required",
    });
  }
  await connectToDataBase();
  try {
    return NextResponse.json(await ContactUsMessage.findByIdAndDelete(uid));
  } catch (error: any) {
    return { result: false, forceMessage: error.message };
  }
}

export async function GET(req: NextRequest) {
  const uid: string | null = req.nextUrl.searchParams.get("uid");
  const pageString: string | null = req.nextUrl.searchParams.get("page");
  let page = 1;
  if (pageString) {
    page = parseInt(pageString);
  }
  await connectToDataBase();
  try {
    if (uid) {
      const result = await ContactUsMessage.findById(uid);
      return NextResponse.json({
        result: true,
        data: result,
      });
    } else {
      if (!page) {
        page = 1;
      }
      const result = await ContactUsMessage.find()
        .sort({ time: -1 })
        .limit(20)
        .skip((page - 1) * 20);
      return NextResponse.json({
        result: true,
        data: result,
      });
    }
  } catch (error: any) {
    return NextResponse.json({ result: false, forceMessage: error.message });
  }
}

export async function PATCH(req: NextRequest) {
  await connectToDataBase();
  const uid: string | null = req.nextUrl.searchParams.get("uid");
  if (!uid) {
    return NextResponse.json({
      result: false,
      forcemessage: "uid is required",
    });
  }
  try {
    return NextResponse.json(await ContactUsMessage.findByIdAndDelete(uid));
  } catch (error: any) {
    return NextResponse.json({ result: false, forceMessage: error.message });
  }
}
