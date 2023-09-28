"use server";

import { connectToDataBase } from "@/lib/mongoose";
import ContentCreation from "../Models/ContentCreation";
import { data } from "autoprefixer";
import { videoTypes } from "@/app/admin/dashboard/ContentEdit/content-production/page";

export default async function ContentCreationData() {
  await connectToDataBase();
  try {
    const result = await ContentCreation.findOne().populate("Videos");
    return {
      result: true,
      data: result,
    };
  } catch (error: any) {
    return { result: false, forceMessage: error.message };
  }
}
type ContentCreationType = {
  Videos: videoTypes;
  Content: string;
};
export async function ContentCreationDataEdit(data: ContentCreationType) {
  await connectToDataBase();
  try {
    const result = await ContentCreation.findOneAndUpdate({}, data);
    return {
      result: true,
    };
  } catch (error: any) {
    console.log(error.message)
    return { result: false, forceMessage: error.message };
  }
}
