"use server";

import { connectToDataBase } from "@/lib/mongoose";
import User from "@/lib/Models/User";

export default async function CreateUser(
  username: string,
  password: string,
  role: number,
  viewName: string,
  profilePic?: string
) {
  await connectToDataBase();
  try {
    const records = await User.count();
    if (records < 1) {
      User.create({
        username,
        password,
        viewName,
        role,
        profilePic,
      });
    }
    return { result: true };
  } catch (error: any) {
    return { result: false, forceMessage: error.message };
  }
}
