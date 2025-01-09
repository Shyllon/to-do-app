const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const filePath = path.join(__dirname, '../data/todos.json');

// Helper to read/write data
const readTodos = () => JSON.parse(fs.readFileSync(filePath));
const writeTodos = (todos) => fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));

exports.getTodos = () => readTodos();

exports.getTodoById = (id) => {
  const todos = readTodos();
  return todos.find((todo) => todo.id === id);
};

exports.createTodo = (title, description) => {
  const todos = readTodos();
  const newTodo = {
    id: uuidv4(),
    title,
    description,
    completed: false,
    createdAt: new Date().toISOString(),
  };
  todos.push(newTodo);
  writeTodos(todos);
  return newTodo;
};

exports.updateTodo = (id, title, description, completed) => {
  const todos = readTodos();
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) return null;
  todos[index] = { ...todos[index], title, description, completed };
  writeTodos(todos);
  return todos[index];
};

exports.deleteTodo = (id) => {
  const todos = readTodos();
  const filteredTodos = todos.filter((todo) => todo.id !== id);
  if (todos.length === filteredTodos.length) return false;
  writeTodos(filteredTodos);
  return true;
};
