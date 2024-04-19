import createHttpError from "http-errors";
import User from "../models/UserModel.js";

export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find({},{password:0});
    res.status(200).json(users);

    if (!users || users.length === 0)
      throw createHttpError(404, "no users found");
    
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {

  try {

    const id =  req.params.id
    await User.deleteOne({_id:id})

    res.status(200).json({
      message:"user deleted"
    })

  } catch (error) {
    next(error)
  }


}
