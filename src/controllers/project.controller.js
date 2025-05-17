import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// GET : http://localhost:3000/projects
export const getProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany();
    if (projects.length === 0) {
      return res.json({ message: "✅ No Projects available", data: [] });
    }
    res.json({ message: "✅ Projects fetched", data: projects });
  } catch (err) {
    res.status(500).json({ error: "❌ Failed to fetch Projects" });
  }
};

// POST : http://localhost:3000/projects
// {
//   "projectNumber": 1,
//   "title": "Elementary Lions",
//   "description" : "Presentation of Lions fused with Elements",
//   "url" : "",
//   "highlight1": "VueJS",
//   "highlight2": "SCSS",
//   "highlight3": "Animations",
//   "highlight4": "Responsive",
//   "highlight5": "GSAP"
// }
export const createProject = async (req, res) => {
  const data = req.body;
  try {
    const newProject = await prisma.project.create({ data });
    res.status(201).json({ message: "✅ Project created", data: newProject });
  } catch (err) {
    res.status(400).json({ error: "❌ Failed to create Project" });
  }
};

// DELETE : http://localhost:3000/projects/:id
export const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.project.delete({ where: { id: parseInt(id) } });
    res.json({ message: `✅ Project with id ${id} deleted` });
  } catch (err) {
    res.status(404).json({ error: `❌ Project with id ${id} not found` });
  }
};
