import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import activityRoutes from "./routes/activityRoutes.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "https://activityhubop.up.railway.app",
    credentials: true,
  })
);

app.use("/api/users", userRoutes);
app.use("/api/activities", activityRoutes);

export default app;
