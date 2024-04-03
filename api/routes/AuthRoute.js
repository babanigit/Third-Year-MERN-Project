import express from 'express';
const router = express.Router();
import {signIn,signUp,signOut,google} from "../controllers/AuthController.js"

router.post("/signup",signUp).post("/signin",signIn).post("/google",google);
router.get("/signout",signOut)

export default router;