# Todo API with Express and MongoDB

## Description
This project is a todo application built using Express.js and MongoDB. The application features functionalities for adding, updating, and removing tasks from the todo list. The backend API handles all CRUD operations, allowing seamless interaction with the MongoDB database. 

## Technologies Used
- **Express.js:** Used for building the backend server and handling API routes.
- **MongoDB:** Used for storing todo tasks in a NoSQL database.
- **Mongoose:** Used for object data modeling (ODM) to interact with MongoDB.

## Features
- **Add Task:** Allows users to add new tasks to the todo list.
- **Update Task:** Enables users to update the details of existing tasks.
- **Remove Task:** Allows users to remove tasks from the todo list.
- **Get All Tasks:** Retrieves and displays a list of all tasks.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/todo-api-express-mongodb.git
   cd todo-api-express-mongodb
2. Install dependencies:   npm install

## Usage
The following API endpoints are available:

# Get All Tasks
URL: /tasks
Method: GET
Description: Retrieves all tasks.

# Add a New Task
URL: /tasks
Method: POST
Description: Adds a new task.
Body Parameters:
title (string): The title of the task.
description (string): The description of the task.

## Update a Task
URL: /tasks/:id
Method: PUT
Description: Updates an existing task.
Body Parameters:
title (string): The new title of the task.
description (string): The new description of the task.

## Delete a Task
URL: /tasks/:id
Method: DELETE
Description: Deletes a task by its ID.

## Contributing
Contributions are welcome! If you have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any inquiries or feedback, please contact me at ankitpandey62042@gmail.com.