import express from "express";
import { getUser, updateUser } from "../controllers/user.controller.js";

import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, getUser);
router.put("/:id", authenticateToken, updateUser);

export { router as userRouter };
