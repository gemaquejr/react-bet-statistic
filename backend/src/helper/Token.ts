import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("❌ JWT_SECRET não foi definido no ambiente.");
}

const createToken = (email?: string) => {
  const token = jwt.sign({ email }, JWT_SECRET as string, {
    algorithm: "HS256",
    expiresIn: "6d",
  });
  return token;
};

export const tokenValidation = (token: string) => {
  const verified = jwt.verify(token, JWT_SECRET as string) as jwt.JwtPayload;
  return verified;
};

export default createToken;
