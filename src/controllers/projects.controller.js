import { Project } from "../models/Project.js";

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.json(projects);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const getProject = async (req, res) => {
    const id = req.params.id;
    try {
        const project = await Project.findOne({
            where: {
                id,
            },
        });

        if (!project)
            return res.status(404).json({ message: "Project not found" });

        res.json(project);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const createProject = async (req, res) => {
    const { name, priority, description } = req.body;

    try {
        const newProject = await Project.create({
            name,
            priority,
            description,
        });

        res.json({ message: "The project was created successfully" });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const updateProject = async (req, res) => {
    const id = req.params.id;
    const { name, priority, description } = req.body;

    try {
        const project = await Project.findByPk(id);
        project.name = name;
        project.priority = priority;
        project.description = description;
        await project.save();

        res.json(project);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const deleteProject = async (req, res) => {
    const id = req.params.id;

    try {
        await Project.destroy({
            where: {
                id,
            },
        });

        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
