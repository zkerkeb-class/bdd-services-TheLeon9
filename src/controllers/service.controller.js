import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// GET : http://localhost:3000/services
export const getServices = async (req, res) => {
  try {
    const services = await prisma.service.findMany();
    if (services.length === 0) {
      return res.json({ message: "✅ No Services available", data: [] });
    }
    res.json({ message: "✅ Services fetched", data: services });
  } catch (err) {
    res.status(500).json({ error: "❌ Failed to fetch Services" });
  }
};

// POST : http://localhost:3000/services
// {
//     "title": "Test",
//     "description": "Test",
//     "price": 99.99
// }
export const createService = async (req, res) => {
  const { title, description, price } = req.body;
  try {
    const newService = await prisma.service.create({
      data: { title, description, price },
    });
    res.status(201).json({ message: "✅ Service created", data: newService });
  } catch (err) {
    res.status(400).json({ error: "❌ Failed to create Service" });
  }
};

// DELETE : http://localhost:3000/services/:id
export const deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.service.delete({ where: { id: parseInt(id) } });
    res.json({ message: `✅ Service with id ${id} deleted` });
  } catch (err) {
    res.status(404).json({ error: `❌ Service with id ${id} not found` });
  }
};
