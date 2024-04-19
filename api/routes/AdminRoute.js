import express from "express";
import { getAllUser } from "../controllers/AdminController.js";
import { verifyToken } from "../utils/VerifyUser.js";

const router = express.Router();

router.route("/users").get( verifyToken, getAllUser);

export default router;