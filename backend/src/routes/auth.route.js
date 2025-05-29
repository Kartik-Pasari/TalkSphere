import express from "express";
import signup from "../controllers/auth/signup.js";
import login from "../controllers/auth/login.js";
import logout from "../controllers/auth/logout.js";
import onboard from "../controllers/auth/onboard.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// protected routes
router.post("/onboarding", protectRoute, onboard);

router.get("/me", protectRoute, (req, res) => {
  // @ts-ignore
  res.status(200).json({ success: true, user: req.user });
});

export default router;
