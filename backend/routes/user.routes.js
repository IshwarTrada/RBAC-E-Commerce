import { Router } from "express";
import {
  createUser,
  forgotPassword,
  loginUser,
  logout,
  resetPassword,
  verifyOTP,
} from "../controllers/user/user.acontroller.js";

const router = Router();

router.post("/signup", createUser);
router.post("/verify-otp", verifyOTP);
router.post("/login", loginUser);
router.post("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:resetToken", resetPassword);

export default router;
