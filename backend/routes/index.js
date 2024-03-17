import express from "express";
const router = express.Router();
import authRoutes from "./auth.route.js";
import messageRoutes from "./message.route.js";

router.use("/auth", authRoutes);
router.use("/message", messageRoutes);

router.get("/", (req, res) => {
  res.json({
    msg: "hello from root",
  });
});

export default router;
