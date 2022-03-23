import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.load();

import { UserService } from "../user/user.service";
const User = new UserService();

const APP_SECRET = process.env.APP_SECRET;

async function requireAuth(resolver, parent, args, ctx, info) {
  const Authorization = ctx.request.get("Authorization");
  if (!Authorization) {
    throw new Error("Authorization header is missing");
  }
  const token = Authorization.replace("Bearer ", "");
  const { userId } = jwt.verify(token, APP_SECRET);
  const user = await User.findOne(userId);
  if (!user) {
    throw new Error("UnAuthenticated");
  }
  ctx.userId = user._id;
  return resolver(); //call the next resolver
}

export const authMiddleware = {
  Mutation: {
    createProduct: requireAuth,
  },
  Query: {
    allProducts: requireAuth,
  },
};
