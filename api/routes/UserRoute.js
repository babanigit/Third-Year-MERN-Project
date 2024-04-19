import express from "express"
import { verifyToken } from "../utils/VerifyUser.js";

import {
updateUser,
deleteUser,
admissionUpdate,
adminFalse
} from "../controllers/UserController.js"

const router= express.Router();

router.post("/update/:id",verifyToken,updateUser);
router.post("/admission/:id",verifyToken,admissionUpdate);
router.post("/adminUpdate/:id", verifyToken,adminFalse)

router.delete("/delete/:id",verifyToken,deleteUser);

export default router;