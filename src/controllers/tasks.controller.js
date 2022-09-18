import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getTask = async (req, res) => {
    const id = req.params.id;
    try {
        const task = await Task.findOne({
            where: { id },
        });

        if (!task)
            return res.status(404).json({ message: "Project not found" });

        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createTask = async (req, res) => {
    const { name, projectId } = req.body;

    try {
        await Task.create({
            name,
            projectId,
        });

        res.json({ message: "The task was created successfully" });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const updateTask = async (req, res) => {
    const id = req.params.id;

    try {
        const task = await Task.findOne({
            where: {
                id,
            },
        });
        task.set(req.body);
        await task.save();

        res.json(task);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const deleteTask = async (req, res) => {
    const id = req.params.id;

    try {
        await Task.destroy({
            where: {
                id,
            },
        });

        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
