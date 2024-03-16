import express from "express";
import { signup, signin, logout } from "../controllers/auth.controller.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    msg: "hi from auth",
  });
});
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/logout", logout);

export default router;
