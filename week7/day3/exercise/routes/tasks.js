const express = require('express');
const fs = require('fs-extra');
const path = require('path');
const router = express.Router();

const tasksFile = path.join(__dirname, '../tasks.json');

// Helper function to read tasks from JSON
const readTasks = async () => {
    try {
        const data = await fs.readFile(tasksFile, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error('Failed to read tasks');
    }
};

// Helper function to write tasks to JSON
const writeTasks = async (tasks) => {
    try {
        await fs.writeFile(tasksFile, JSON.stringify(tasks, null, 2));
    } catch (error) {
        throw new Error('Failed to write tasks');
    }
};

// GET /tasks: Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await readTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /tasks/:id: Get task by ID
router.get('/:id', async (req, res) => {
    const taskId = req.params.id;
    try {
        const tasks = await readTasks();
        const task = tasks.find((t) => t.id === taskId);
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ error: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// POST /tasks: Create new task
router.post('/', async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    try {
        const tasks = await readTasks();
        const newTask = { id: Date.now().toString(), title, description };
        tasks.push(newTask);
        await writeTasks(tasks);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT /tasks/:id: Update task by ID
router.put('/:id', async (req, res) => {
    const taskId = req.params.id;
    const { title, description, completed } = req.body;

    if (!title || !description || typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'Title, description, and completed are required' });
    }

    try {
        const tasks = await readTasks();
        const index = tasks.findIndex((t) => t.id === taskId);
        if (index !== -1) {
            tasks[index] = { id: taskId, title, description, completed };
            await writeTasks(tasks);
            res.json(tasks[index]);
        } else {
            res.status(404).json({ error: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /tasks/:id: Delete task by ID
router.delete('/:id', async (req, res) => {
    const taskId = req.params.id;
    try {
        const tasks = await readTasks();
        const index = tasks.findIndex((t) => t.id === taskId);
        if (index !== -1) {
            tasks.splice(index, 1);
            await writeTasks(tasks);
            res.sendStatus(204);
        } else {
            res.status(404).json({ error: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;