import express from "express";
import { getSkills, createSkill, deleteSkill } from "../controllers/skill.controller.js";

import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, getSkills);
router.post("/", authenticateToken, createSkill);
router.delete("/:id", authenticateToken, deleteSkill);


export { router as skillRouter };
