import { connectToDataBase } from "@/lib/mongoose";
import PagesData from "@/lib/Models/PagesData";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDataBase();
  try {
    const title = await PagesData.findOne({
      category: "Business",
      title: "BusinessPageTitle",
    });
    const text = await PagesData.findOne({
      category: "Business",
      title: "BusinessPageText",
    });
    const cards = await PagesData.find({ category: "BusinessFeatures" });
    return NextResponse.json({
      result: true,
      title,
      text,
      cards,
    });
  } catch (error: any) {
    return NextResponse.json({ result: false, forceMessage: error.message });
  }
}
