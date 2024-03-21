import express from "express";
import { getUsers } from "../controllers/user.controller";
import protectRoute from "../../middlewares/protectRoute";
const router = express.Router();

router.get("/", protectRoute, getUsers);

export default router;
