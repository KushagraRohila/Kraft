import express from "express";
import { register, login, getProfile, updateProfile, updateLocation } from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);
router.put("/location", protect, updateLocation);

export default router;
