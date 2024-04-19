import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/UserModel.js";
import { errorHandler } from "../utils/Error.js";
import createHttpError from "http-errors";

export const signUp = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password)
      throw createHttpError(400, "parameters missing");

    const existingUserEmail = await User.findOne({ email: email });

    if (existingUserEmail)
      throw createHttpError(409, "email is already taken!");

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) throw createHttpError(400, "Parameters missing");

    const validUser = await User.findOne({ email });
    if (!validUser) throw createHttpError(404, "invalid credentials (u)");

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) throw createHttpError(401, 'invalid credentials (p)');


        // generating token
        const token = jwt.sign({ 
          id: validUser._id,
          user: validUser
        }, process.env.JWT_SECRET);

        const { password: hashedPassword, ...rest } = validUser._doc;
    
        const expiryDate = new Date(Date.now() + 3600000); // 1 hour
    
        res
          .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
          .status(200)
          .json(rest);

  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {

    try {

      console.log("photo url ", req.body.photo)

        const user = await User.findOne({ email: req.body.email });
        if (user) {

          const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    
          const { password: hashedPassword, ...rest } = user._doc;
    
          const expiryDate = new Date(Date.now() + 3600000); // 1 hour
    
          res
            .cookie('access_token', token, {
              httpOnly: true,
              expires: expiryDate,
            })
            .status(200)
            .json(rest);
    
        } else {
    
          const generatedPassword =
            Math.random().toString(36).slice(-8) +
            Math.random().toString(36).slice(-8);
    
          const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
    
          const newUser = new User({
            username:
              req.body.name.split(' ').join('').toLowerCase() +
              Math.random().toString(36).slice(-8),
            email: req.body.email,
            password: hashedPassword,
            profilePicture: req.body.photo,
          });

          await newUser.save();

          const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
    
          const { password: hashedPassword2, ...rest } = newUser._doc;
    
          const expiryDate = new Date(Date.now() + 3600000); // 1 hour
          
          res
            .cookie('access_token', token, {
              httpOnly: true,
              expires: expiryDate,
            })
            .status(200)
            .json(rest);

        }

        
    } catch (error) {
      console.log("error from authCont ", error)
      next(error)
    }

};

export const signOut = async (req, res, next) => {

    try {

        res
    .clearCookie('access_token')
    .status(200)
    .json({ message: "User Logged out successfully" });
        
    } catch (error) {
        next(error)
    }
    
};
