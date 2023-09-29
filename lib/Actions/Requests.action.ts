// "use server";

// import { connectToDataBase } from "@/lib/mongoose";
// import ContactUsMessage from "../Models/ContactUsMessage";

// export default async function FetchMessages(page: number) {
//   await connectToDataBase();
//   try {
//     const result = await ContactUsMessage.find().sort({time:-1})
//       .limit(20)
//       .skip((page - 1) * 20);
//     return {
//       result: true,
//       data: result,
//     };
//   } catch (error: any) {
//     return { result: false, forceMessage: error.message };
//   }
// }