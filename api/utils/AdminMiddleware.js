import createHttpError from "http-errors";

const AdminMiddleware = async (req, res, next) => {
  try {
    console.log(req.user);

    const adminRole = req.user.isAdmin;

    // if (!adminRole) {
    //   throw createHttpError(403, "access denied. user is not an admin");
    // }
    
    next();

  } catch (error) {
    next(error);
  }
};

export default AdminMiddleware;
