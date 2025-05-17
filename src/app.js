import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { projectRouter } from "./routes/project.routes.js";
import { serviceRouter } from "./routes/service.route.js";
import { skillRouter } from "./routes/skill.routes.js";
import { userRouter } from "./routes/user.routes.js";

import { initDefaultUser } from "./utils/initUser.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/projects", projectRouter);
app.use("/skills", skillRouter);
app.use("/services", serviceRouter);

initDefaultUser();

const PORT = process.env.PORT;
app.listen(process.env.PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});

export default app;
