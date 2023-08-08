"use server";

import { connectToDataBase } from "@/lib/mongoose";
import PagesData from "@/lib/Models/PagesData";

export default async function ContactUsInfoData() {
  await connectToDataBase();
  try {
    const result = await PagesData.find({ category: "ContactUsPageInfo" });
    return {
      result: true,
      data: result,
    };
  } catch (error: any) {
    return { result: false, forceMessage: error.message };
  }
}
