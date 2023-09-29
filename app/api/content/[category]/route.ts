import PagesData from "@/lib/Models/PagesData";
import { connectToDataBase } from "@/lib/mongoose";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { category: string } }
) {
  await connectToDataBase();

  try {
    const result = await PagesData.find({ category: params.category });
    return NextResponse.json({
      result: true,
      data: result,
    });
  } catch (error: any) {
    return NextResponse.json({ result: false, forceMessage: error.message });
  }
}
