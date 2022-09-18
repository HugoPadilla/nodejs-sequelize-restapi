import express from "express";
import projectRoutes from "./routes/projects.routes.js";

const app = express();

// middlewares
app.use(express.json())

// routes
app.use(projectRoutes)

export default app;
