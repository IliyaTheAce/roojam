"use server";

import { connectToDataBase } from "@/lib/mongoose";
import ContactUsMessage from "../Models/ContactUsMessage";

export default async function FetchMessages(page: number) {
  await connectToDataBase();
  try {
    const result = await ContactUsMessage.find().sort({time:-1})
      .limit(20)
      .skip((page - 1) * 20);
    return {
      result: true,
      data: result,
    };
  } catch (error: any) {
    return { result: false, forceMessage: error.message };
  }
}

export async function FetchSingleMessage(uid: string) {
  await connectToDataBase();
  try {
    const result = await ContactUsMessage.findById(uid);
    return {
      result: true,
      data: result,
    };
  } catch (error: any) {
    return { result: false, forceMessage: error.message };
  }
}

export async function SetAsRead(uid: string) {
  await connectToDataBase();
  try {
    const result = await ContactUsMessage.findByIdAndUpdate(uid, {
      read: true,
    });
    return {
      result: true,
      data: result,
    };
  } catch (error: any) {
    return { result: false, forceMessage: error.message };
  }
}

export async function DeleteMessage(uid: string) {
  await connectToDataBase();
  try {
    return await ContactUsMessage.findByIdAndDelete(uid);

  } catch (error: any) {
    return { result: false, forceMessage: error.message };
  }
}



export async function GetTodaysMessage() {
  await connectToDataBase();
  try {
    const start =new Date();
    start.setHours(0,0,0,0);
    return await ContactUsMessage.count({time:{ $gte: start}});

  } catch (error: any) {
    return { result: false, forceMessage: error.message };
  }
}


export async function GetUnreadMessages() {
  await connectToDataBase();
  try {
    const start =new Date();
    start.setHours(0,0,0,0);
    return await ContactUsMessage.count({read: {$not: { $eq: true}}});

  } catch (error: any) {
    return { result: false, forceMessage: error.message };
  }
}
