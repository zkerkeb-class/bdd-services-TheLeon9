import express from "express";
import {
  getProjects,
  createProject,
  deleteProject,
} from "../controllers/project.controller.js";

import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, getProjects);
router.post("/", authenticateToken, createProject);
router.delete("/:id", authenticateToken, deleteProject);

export { router as projectRouter };
