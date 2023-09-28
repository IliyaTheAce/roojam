import { VerifyUser } from "@/lib/Actions/Users.actions";
import ContentCreation from "@/lib/Models/ContentCreation";
import { connectToDataBase } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectToDataBase();
  try {
    const result = await ContentCreation.findOne();
    return NextResponse.json({
      result: true,
      data: result,
    });
  } catch (error: any) {
    return NextResponse.json({ result: false, forceMessage: error.message });
  }
}

export async function POST(req: NextRequest) {
  await connectToDataBase();
  // if (!req.headers.has("Authentication"))
  //   return NextResponse.json({ result: false });
  const user = await VerifyUser(req.headers.get("Authentication"));
  if (user.result) {
    try {
      const reqBody = await req.json();
      const result = await ContentCreation.findOneAndUpdate({}, reqBody);
      return NextResponse.json({
        result: true,
      });
    } catch (error: any) {
      console.log(error.message);
      return NextResponse.json({ result: false, forceMessage: error.message });
    }
  } else {
    return NextResponse.json({ result: false });
  }
}
