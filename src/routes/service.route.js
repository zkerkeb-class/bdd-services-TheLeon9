import express from "express";
import { getServices, createService, deleteService } from "../controllers/service.controller.js";

import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, getServices);
router.post("/", authenticateToken, createService);
router.delete("/:id", authenticateToken, deleteService);

export { router as serviceRouter };