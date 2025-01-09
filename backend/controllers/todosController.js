// Temporary in-memory data
let todos = [];

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
  const { title, description, completed } = req.body;
  const newTodo = {
    id: Math.random().toString(36).substring(7), // Generate a random ID
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
    return res.status(404).json({ error: "Todo not found" });
  }

  if (title) todo.title = title;
  if (description) todo.description = description;
  if (typeof completed === "boolean") todo.completed = completed;

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
  res.status(204).send(); // No content response
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
