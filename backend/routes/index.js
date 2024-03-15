import express from "express";
const router = express.Router();
import authRoutes from "./auth.route.js";

router.use("/auth", authRoutes);
router.get("/", (req, res) => {
  res.json({
    msg: "hello from root",
  });
});
export default router;
