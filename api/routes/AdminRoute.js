import express from "express";
import { getAllUser,deleteUser } from "../controllers/AdminController.js";
import { verifyToken } from "../utils/VerifyUser.js";
import AdminMiddleware from "../utils/AdminMiddleware.js";

const router = express.Router();

router.route("/users").get( verifyToken,AdminMiddleware, getAllUser);

router.route("/users/delete/:id").delete(verifyToken,AdminMiddleware, deleteUser)

export default router;