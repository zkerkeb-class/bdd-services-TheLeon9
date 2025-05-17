import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// GET : http://localhost:3000/skills
export const getSkills = async (req, res) => {
  try {
    const skills = await prisma.skill.findMany();
    if (skills.length === 0) {
      return res.json({ message: "✅ No Skills available", data: [] });
    }
    res.json({ message: "✅ Skills fetched", data: skills });
  } catch (err) {
    res.status(500).json({ error: "❌ Failed to fetch Skills" });
  }
};

// POST : http://localhost:3000/skills
// {
//     "value": "ThreeJS"
// }
export const createSkill = async (req, res) => {
  const { value } = req.body;
  try {
    const newSkill = await prisma.skill.create({ data: { value } });
    res.status(201).json({ message: "✅ Skill created", data: newSkill });
  } catch (err) {
    res.status(400).json({ error: "❌ Failed to create Skill" });
  }
};

// DELETE : http://localhost:3000/skills/:id
export const deleteSkill = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.skill.delete({ where: { id: parseInt(id) } });
    res.json({ message: `✅ Skill with id ${id} deleted` });
  } catch (err) {
    res.status(404).json({ error: `❌ Skill with id ${id} not found` });
  }
};
