# Todo Server

This is the backend server for a Todo List application. It is built using Node.js and Express, providing a RESTful API for managing tasks.

## Features

- Create a new task
- Retrieve all tasks
- Retrieve a specific task by ID
- Update a task by ID
- Delete a task by ID

## Technologies Used

- Node.js
- Express
- CORS
- Dotenv
- Nodemon

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-server.git](https://github.com/ANKIT-BISWAS-20/Todo_Server.git
   cd todo-server
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the server:

   ```bash
   nodemon index.js
   ```

   The server should now be running on `http://localhost:8000`.


## API Endpoints

The server provides the following API endpoints:

- `GET /tasks`: Retrieve all tasks.
- `GET /tasks/:id`: Retrieve a specific task by ID.
- `POST /tasks`: Create a new task.
  - Request body should contain `title`, `description`, `status`, and `deadline`.
- `PUT /tasks/:id`: Update an existing task by ID.
  - Request body should contain `title`, `description`, `status`, and `deadline`.
- `DELETE /tasks/:id`: Delete a task by ID.

### Example API Requests

#### Create a Task

```bash
POST /tasks
Content-Type: application/json

{
  "title": "New Task",
  "description": "Description of the new task",
  "status": "pending",
  "deadline": "2024-12-31"
}
```

#### Retrieve All Tasks

```bash
GET /tasks
```

#### Retrieve a Task by ID

```bash
GET /tasks/:id
```

#### Update a Task by ID

```bash
PUT /tasks/:id
Content-Type: application/json

{
  "title": "Updated Task Title",
  "description": "Updated description",
  "status": "in-progress",
  "deadline": "2025-01-15"
}
```

#### Delete a Task by ID

```bash
DELETE /tasks/:id
```


## Author

Ankit Biswas
