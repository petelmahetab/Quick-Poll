# Full Stack Polling App using MERN

A modern polling application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This app allows users to create, vote on, and manage polls with a seamless and secure user experience. Features include user authentication, poll creation, voting, bookmarking, and admin functionalities.

---

## 📋 Project Overview

The Full Stack Polling App is designed to provide an interactive platform for creating and participating in polls. Users can sign up, log in, create polls with various types (e.g., single-choice, yes/no), vote on polls, bookmark their favorites, and view results. Admin users have additional privileges to close or delete polls.

---

## ✨ Features

- **User Authentication**: Secure login and signup using JWT (JSON Web Tokens).
- **Create Polls**: Users can create polls with types like single-choice and yes/no.
- **View All Polls**: Displays a list of all available polls for users to browse.
- **Filter Polls by Poll Type**: Filter polls by type (e.g., rating, single-choice).
- **Vote on Polls**: Users can vote on polls and see real-time results.
- **Bookmark Polls**: Save favorite polls for quick access later.
- **Close Polls**: Admins can close polls to stop further voting.
- **View Voted Polls**: Users can see polls they’ve voted on and their results.
- **Delete Polls**: Admins can delete polls as needed.

---

## 🖼️ Screenshots

### 1. Dashboard
![Screenshot (98)](https://github.com/user-attachments/assets/fa762ebb-2803-483c-9fda-9812c42c3772)
*Description*: The main dashboard showing available polls and user stats.

### 2. Create Poll Page
![Screenshot (100)](https://github.com/user-attachments/assets/76f57b7a-a7d4-453e-81ff-869b179daf8a)

*Description*: Interface for creating a new poll with options.


### 3. Poll Voting Interface

![Screenshot (103)](https://github.com/user-attachments/assets/5ad3f442-4138-422f-a328-3c192bad5b72)

*Description*: A sample poll where users can vote and see results.

---

## 🛠️ Technologies Used

- **MongoDB**: NoSQL database for storing user data and polls.
- **Express.js**: Backend framework for handling API routes.
- **React.js**: Frontend library for building the user interface.
- **Node.js**: Runtime environment for the backend.
- **JWT**: For secure user authentication.
- **Axios**: For making HTTP requests between frontend and backend.
- **React Hot Toast**: For displaying notifications.
- **Tailwind CSS**: For styling the frontend (assumed based on your code).

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/petelmahetab/Quick-Poll.git
   cd polling-app

   ```
2.Install Backend Dependencies:

    cd backend
    npm install  

3.Set Up Environment Variables: Create a .env file in the backend folder  

   MONGO_URI=xxxxx
   JWT_SECRET=xxxxx
   PORT=8000
   
4.Run the Backend & Frontend:

   cd backend
   npx nodemon

   cd frontend
   npm run dev

5.## 🌐 Live Demo
Try out the app here: [Quick Poll / Snap Poll ](https://snappoll-xi.vercel.app/)
