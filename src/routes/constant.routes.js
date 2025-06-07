import express from "express";
import { getConstants } from "../controllers/constant.controller.js";

import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, getConstants);

export { router as constantRouter };
