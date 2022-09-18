import express from "express";
import projectRoutes from "./routes/projects.routes.js";
import taskRoutes from './routes/tasks.routes.js'

const app = express();

// middlewares
app.use(express.json())

// routes
app.use(projectRoutes)
app.use(taskRoutes)

export default app;
