const express = require('express');
const router = express.Router();

// In-memory database for to-do items
let todos = [];
let id = 1;

// Get all to-do items
router.get('/', (req, res) => {
    res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
    const newTodo = {
        id: id++,
        task: req.body.task,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
    const todoId = parseInt(req.params.id, 10);
    const todo = todos.find(t => t.id === todoId);

    if (todo) {
        todo.task = req.body.task;
        todo.completed = req.body.completed;
        res.json(todo);
    } else {
        res.status(404).json({ message: 'To-do item not found' });
    }
});

// Delete to-do item by ID
router.delete('/:id', (req, res) => {
    const todoId = parseInt(req.params.id, 10);
    todos = todos.filter(t => t.id !== todoId);
    res.sendStatus(204).send();
});

module.exports = router;