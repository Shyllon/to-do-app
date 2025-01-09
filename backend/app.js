const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('api/todos', todoRoutes);

app.get('/',(req, res) => {
    res.send('Welcome to the Todo API');
});

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
