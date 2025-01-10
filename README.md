# To-Do App API

## Project Description
This is a simple To-Do list API that allows users to create, read, update, and delete tasks. The API supports basic CRUD operations and includes input validation and error handling.

## Setup Instructions

1. Clone the repository:
git clone https://github.com/Shyllon/to-do-app.git
cd to-do-app

2. Install dependencies:
npm install

3. Start the application:
npm start
The app will be running at http://localhost:3000.

API Endpoints
GET /todos
List all to-do items.
Response:
[
  {
    "id": "unique-id",
    "title": "Task title",
    "description": "Task description",
    "completed": false,
    "createdAt": "2024-03-21T10:00:00Z"
  }
]
GET /todos/:id
Get a specific to-do item by ID.
Response:
{
  "id": "unique-id",
  "title": "Task title",
  "description": "Task description",
  "completed": false,
  "createdAt": "2024-03-21T10:00:00Z"
}
Testing with POSTMAN: https://to-do-app-task.postman.co/workspace/1f0dc34e-22bb-4e75-8286-0f9173a1931b/request/38770067-8da5ece5-f250-40ca-bdf9-f0eb9d0c8820?action=share&source=copy-link&creator=38770067

POST /todos
Create a new to-do item.
Request Body:
{
  "title": "New task",
  "description": "Task description",
  "completed": false
}
Response:
{
  "id": "unique-id",
  "title": "New task",
  "description": "Task description",
  "completed": false,
  "createdAt": "2024-03-21T10:00:00Z"
}
Test with POSTMAN: https://to-do-app-task.postman.co/workspace/1f0dc34e-22bb-4e75-8286-0f9173a1931b/request/38770067-fcc84aaf-7e04-4098-bf35-7ad6cb60032a?action=share&source=copy-link&creator=38770067

PUT /todos/:id
Update a to-do item by ID.
Request Body:
{
  "title": "Updated task",
  "description": "Updated description",
  "completed": true
}
Test with POSTMAN: https://to-do-app-task.postman.co/workspace/1f0dc34e-22bb-4e75-8286-0f9173a1931b/request/38770067-8ad2ad89-a7ff-41a6-b4e8-014dd09b8109?action=share&source=copy-link&creator=38770067

DELETE /todos/:id
Delete a to-do item by ID.
Response:
{
  "message": "Todo deleted successfully"
}
GET /todos/search
Search for to-do items by title.
Query Parameter:
title: Search term for task title.
Response:
[
  {
    "id": "unique-id",
    "title": "Search result title",
    "description": "Task description",
    "completed": false,
    "createdAt": "2024-03-21T10:00:00Z"
  }
]
Test with POSTMAN: https://to-do-app-task.postman.co/workspace/1f0dc34e-22bb-4e75-8286-0f9173a1931b/request/38770067-f0845919-d35a-4d1d-96f6-4da53ad83256?action=share&source=copy-link&creator=38770067

## Hosted API
You can access the deployed API at https://to-do-app-te1d.onrender.com.

License
This project is licensed under the MIT License.