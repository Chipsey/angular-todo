const express = require("express");
const router = express.Router();
const toDoController = require("../controllers/toDoControllers");

// Get all todos
router.get("/", toDoController.getAllTodos);

// Get a specific todo by ID
router.get("/:id", toDoController.getTodoById);

// Create a new todo
router.post("/", toDoController.createTodo);

// Update a todo by ID
router.put("/:id", toDoController.updateTodo);

// Delete a todo by ID
router.delete("/:id", toDoController.deleteTodo);

module.exports = router;
