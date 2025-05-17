import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// GET : http://localhost:3000/user
export const getUser = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    if (users.length === 0) {
      return res.json({ message: "✅ No Users available", data: [] });
    }
    res.json({ message: "✅ Users fetched", data: users });
  } catch (err) {
    res.status(500).json({ error: "❌ Failed to fetch Users" });
  }
};

// PUT : http://localhost:3000/user/:id
// {
//     "lastName": "Moracchini",
//     "firstName": "Florian",
//     "year": 23,
//     "country": "France",
//     "city": "Paris",
//     "linkedin": "https://www.linkedin.com/in/florian-moracchini/",
//     "github": "https://github.com/TheLeon9",
//     "description": "Fullstack Dev passionné 🚀",
//     "email": "florian.moracchini09@gmail.com"
// }
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updated = await prisma.user.update({
      where: { id: parseInt(id) },
      data,
    });
    res.json({ message: "✅ User updated", data: updated });
  } catch (err) {
    res.status(400).json({ error: "❌ User not found or update failed" });
  }
};
