import express from "express"
import { verifyToken } from "../utils/VerifyUser.js";

import {
updateUser,
deleteUser
} from "../controllers/UserController.js"

const router= express.Router();

router.post("/update/:id",verifyToken,updateUser);
router.delete("/delete/:id",verifyToken,deleteUser);

export default router;