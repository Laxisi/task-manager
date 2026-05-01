Task Manager Application

This is a full stack Task Manager web application where users can create, manage and track tasks easily. It helps teams or individuals organize their work with different task stages and priorities.

Features:
- Create new tasks
- Assign tasks to team members
- Set task priority (High, Medium, Normal, Low)
- Set task stages (Todo, In Progress, Completed)
- Upload files/assets with tasks
- View dashboard with task statistics
- Track activities of each task
- Trash and restore tasks

Tech Stack:
Frontend:
- React (Vite)
- Tailwind CSS
- Redux Toolkit

Backend:
- Node.js
- Express.js
- MongoDB (Atlas)

Other Tools:
- Firebase (for file upload)
- Railway (for deployment)

How to Run Project:

1. Clone the repository
2. Open project in VS Code

Frontend:
cd client
npm install
npm run dev

Backend:
cd server
npm install
npm start

Make sure to add .env file for:
- MongoDB connection
- Firebase config
- JWT secret

Project Structure:
- client → Frontend code
- server → Backend APIs
- controllers → API logic
- models → Database schema

Future Improvements:
- Add authentication UI improvements
- Add notifications UI
- Improve dashboard charts
- Mobile responsiveness

Author:
Laxmi Singh
