import dotenv from "dotenv";
import jwt from "jsonwebtoken";

// Charger les variables d'environnement
dotenv.config();

const generateFakeToken = () => {
  const payload = { userId: "fakeUserId", role: "user" };
  const secret = process.env.JWT_SECRET;
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};

export default generateFakeToken;
