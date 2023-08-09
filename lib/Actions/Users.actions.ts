"use server";

import { connectToDataBase } from "@/lib/mongoose";
import User from "@/lib/Models/User";
import * as jose from "ts-jose";
import { sign } from "jsonwebtoken";
export async function CreateUser(
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

interface loginExport {
  token: string;
}
export async function LoginUser(username: string, password: string) {
  await connectToDataBase();
  try {
    const user = await User.findOne({ username, password });
    const privateKey = process.env.PRIVATE_KEY;
    sign(user._id, process.env.PRIVATE_KEY);
    return { result: true };
  } catch (error: any) {
    return { result: false, forceMessage: error.message };
  }
}
