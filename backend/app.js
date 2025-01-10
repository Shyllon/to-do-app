const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');
const logger = require('./middleware/logger'); 

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Logger request
app.use(logger);

// Register routes
app.use('/api/todos', todoRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Todo API');
});

// Start server
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
