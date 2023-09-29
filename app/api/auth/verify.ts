import { verify } from "jsonwebtoken";

export async function VerifyUser(req: Request) {
  if (!process.env.PRIVATE_KEY)
    return { result: false, forceMessage: "No Secret Key in env file" };
  const token = req.headers.get("Authorization")?.split(" ")[1];
  if (token) {
    try {
      const decodedToken: { userId: string } = JSON.parse(
        verify(token, process.env.PRIVATE_KEY).toString()
      );
      return { result: true, userId: decodedToken.userId };
    } catch (error: any) {
      return { result: false, forceMessage: error.message };
    }
  } else return { result: false, forceMessage: "Token is missing" };
}
