import jwt from "jsonwebtoken";
import { errorHandler } from "./Error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) throw errorHandler(401, "you are not authenticated! ");

  if (!process.env.ACCESS_TOKEN_SECRET) {
    throw errorHandler(404, " Access token secret not found or undefined (VU)");
  }
  // verify token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) throw errorHandler(403, "token is not valid! ");

    req.user = user;
    next();
  });
};
