import createHttpError from "http-errors";
import bcryptjs from "bcryptjs";

import User from "../models/UserModel.js";

// update user
export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    throw createHttpError(401, "you can only update your account! ");
  }

  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    var adminState = false;
    if (req.body.adminC) {
      if (req.body.adminC == "admin6920") {
        adminState = true;
      } else {
        adminState = false;
        throw createHttpError(401, " Invalid admin pass! ");
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
          isAdmin: adminState,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const admissionUpdate = async (req, res, next) => {
  try {
    const { fullName, contact, date, instrument } = req.body;

    const userCheck = await User.findById(req.params.id);
    if (userCheck.fullName != "default")
      throw createHttpError(401, " User have already Admitted! ");

    if (!fullName) throw createHttpError(401, " Please enter Full Name! ");

    if (!contact) throw createHttpError(401, " Please add Contact! ");

    if (!date) throw createHttpError(401, " Please select date! ");

    if (contact.length != 10)
      throw createHttpError(401, " Please Enter all Numbers! ");

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          fullName,
          contact,
          date,
          instrument,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const adminFalse = async (req, res, next) => {
  try {
    console.log("clicked on adminFalse");
    // const {adminState}=req.body
    // const userCheck = await User.findById(req.params.id);

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          isAdmin: false,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

// delete user
export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    throw createHttpError(401, "You can delete only your account!");
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted!");
  } catch (error) {
    next(error);
  }
};
