const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todosController');

// API Endpoints
router.get('/', todosController.getAllTodos);
router.get('/:id', todosController.getTodoById);
router.post('/', todosController.validateTodo, todosController.createTodo);
router.put('/:id', todosController.validateTodo, todosController.updateTodo);
router.delete('/:id', todosController.deleteTodo);
router.get('/search', todosController.searchTodosByTitle);

module.exports = router;
