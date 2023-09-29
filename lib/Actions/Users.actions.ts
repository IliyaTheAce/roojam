// "use server";

// import { connectToDataBase } from "@/lib/mongoose";
// import User from "@/lib/Models/User";
// import { sign, verify } from "jsonwebtoken";
// import { compare, hash } from "bcryptjs";
// export async function CreateUser(
//   username: string,
//   password: string,
//   role: number,
//   viewName: string,
//   profilePic?: string
// ) {
//   await connectToDataBase();
//   try {
//     const hashedPass = await hash(password, 16);
//     const user = await User.create({
//       username,
//       password: hashedPass,
//       viewName,
//       role,
//       profilePic,
//     });
//     // @ts-ignore
//     let token = sign({ userId: user._id }, process.env.PRIVATE_KEY);
//     return { result: true, token };
//   } catch (error: any) {
//     return { result: false, forceMessage: error.message };
//   }
// }

// export async function LoginUser(username: string, password: string) {
//   await connectToDataBase();
//   try {
//     const user = await User.findOne({ username });
//     if (user) {
//       const isValidPass = await compare(password, user.password);
//       if (isValidPass) {
//         // @ts-ignore
//         const token = sign({ userId: user._id }, process.env.PRIVATE_KEY);
//         return { result: true, token };
//       }
//     }
//   } catch (error: any) {
//     return { result: false, forceMessage: error.message };
//   }
// }

// export async function VerifyUser(token: string | null) {
//   return { result: true };
//   if (!token) return { result: false, forceMessage: "توکنی وجود ندارد" };
//   try {
//     if (token) {
//       // @ts-ignore
//       const decodedToken = verify(token, process.env.PRIVATE_KEY);
//       return { result: true, userId: decodedToken.userId };
//     } else {
//       return { result: false };
//     }
//   } catch (error: any) {
//     return { result: false, forceMessage: error.message };
//   }
// }
