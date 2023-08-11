"use server";

import { connectToDataBase } from "@/lib/mongoose";
import PagesData from "@/lib/Models/PagesData";

export default async function BusinessData() {
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
    return {
      result: true,
      title,
      text,
      cards,
    };
  } catch (error: any) {
    return { result: false, forceMessage: error.message };
  }
}
