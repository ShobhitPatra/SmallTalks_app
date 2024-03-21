import express from "express";
import protectRoute from "../../middlewares/protectRoute.js";
import { sendMessage, getMessages } from "../controllers/message.controller.js";

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);
router.post("/:id", protectRoute, getMessages);

export default router;
