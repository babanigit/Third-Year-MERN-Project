import createHttpError from "http-errors";
import User from "../models/UserModel.js";

const AdminMiddleware = async (req, res, next) => {
  try {
    // console.log("the user is : ", req.user);

    const userId = req.user.id;

    const user =  await User.findById(userId)
    // const user = await User.findOne({ email: req.body.email });


    console.log(user)

    if (!user.isAdmin) {
      throw createHttpError(403, "access denied. user is not an admin");
    }
    
    next();

  } catch (error) {
    next(error);
  }
};

export default AdminMiddleware;
