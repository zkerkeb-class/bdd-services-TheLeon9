import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getConstants = async (req, res) => {
  try {
    const [projects, users, skills, services] = await Promise.all([
      prisma.project.findMany(),
      prisma.user.findMany(),
      prisma.skill.findMany(),
      prisma.service.findMany(),
    ]);

    res.status(200).json({
      message: "✅ Constants Data fetched",
      users,
      projects,
      skills,
      services,
    });
  } catch (err) {
    res.status(500).json({ error: "❌ Failed to fetch Constants Data" });
  }
};
