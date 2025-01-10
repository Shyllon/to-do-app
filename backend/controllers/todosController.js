const { validationResult } = require('express-validator');
const { body } = require('express-validator');
const todos = []; // Array to hold todo items temporarily

// Validation chain for POST/PUT requests
const validateTodo = [
  body('title').not().isEmpty().withMessage('Title is required'),
  body('description').not().isEmpty().withMessage('Description is required'),
  body('completed').optional().isBoolean().withMessage('Completed must be a boolean'),
];

// Get all todos
const getAllTodos = (req, res) => {
  res.status(200).json(todos);
};

// Get a specific todo by ID
const getTodoById = (req, res) => {
  const { id } = req.params;
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  res.status(200).json(todo);
};

// Create a new todo
const createTodo = (req, res) => {
  // Validation check
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description, completed } = req.body;
  const newTodo = {
    id: Math.random().toString(36).substring(7),
    title,
    description,
    completed: completed || false,
    createdAt: new Date(),
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

// Update a specific todo by ID
const updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  // Validation check
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  if (title) todo.title = title;
  if (description) todo.description = description;
  if (typeof completed === 'boolean') todo.completed = completed;

  res.status(200).json(todo);
};

// Delete a specific todo by ID
const deleteTodo = (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todos.splice(index, 1);
  res.status(204).send(); 
};

// Search todos by title
const searchTodosByTitle = (req, res) => {
  const { title } = req.query;
  const filteredTodos = todos.filter(todo => todo.title.toLowerCase().includes(title.toLowerCase()));
  
  if (filteredTodos.length === 0) {
    return res.status(404).json({ error: 'No todos found with the given title' });
  }
  
  res.status(200).json(filteredTodos);
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  searchTodosByTitle,
  validateTodo,
};
