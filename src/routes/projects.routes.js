import { Router } from "express";
import {
    getProjects,
    getProject,
    getTasksOfProject,
    createProject,
    updateProject,
    deleteProject,
} from "../controllers/projects.controller.js";

const router = Router();

router.get("/projects", getProjects);
router.get("/projects/:id", getProject);
router.get("/projects/:id/tasks", getTasksOfProject);
router.post("/projects", createProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);

export default router;
