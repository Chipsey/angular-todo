const Todo = require("../models/Todo");

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    throw error;
  }
};

// Get a specific todo by ID
exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
  } catch (error) {
    throw error;
  }
};

// Create a new todo
exports.createTodo = async (req, res) => {
  const todo = req.body;
  console.log(todo);
  const newTodo = new Todo(todo);

  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    throw error;
  }
};

// Update a todo by ID
exports.updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedTodo);
  } catch (error) {
    throw error;
  }
};

// Delete a todo by ID
exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    throw error;
  }
};
