import jwt from "jsonwebtoken";
import createHttpError from "http-errors";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
console.log(token)
  if (!token) throw createHttpError(401, "you are not authenticated! ");

  if (!process.env.JWT_SECRET) {
    throw createHttpError(404, " Access token secret not found or undefined (VU)");
  }
  // verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) throw createHttpError(403, "token is not valid! ");

    req.user = user;
    next();
  });
};
