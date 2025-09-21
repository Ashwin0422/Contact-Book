# Full-Stack Contact Book Application

A simple and responsive MERN stack (MongoDB, Express.js, React, Node.js) application for managing contacts.

## Features

-   **Add, View, and Delete** contacts.
-   **Pagination** for easy navigation through the contact list.
-   **Client-side validation** for email and phone numbers.
-   **Responsive design** for both mobile and desktop.

## Tech Stack

-   **Frontend**: React, Vite, Axios, CSS
-   **Backend**: Node.js, Express.js, MongoDB, Mongoose

---

## Live Demo

-   **Frontend is available at**: [https://contact-book-three-psi.vercel.app/](https://contact-book-three-psi.vercel.app/)
-   **Backend is available at**: [https://contact-book-1-dem9.onrender.com](https://contact-book-1-dem9.onrender.com)

---

## Getting Started

### Prerequisites

-   Node.js (v18+)
-   npm
-   MongoDB (local instance or a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster)

### Backend Setup

1.  **Navigate to the backend directory**
    ```bash
    cd backend
    ```
2.  **Install dependencies**
    ```bash
    npm install
    ```
3.  **Create a `.env` file** in the `backend` directory and add your MongoDB connection string:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    ```
4.  **Start the server** (with auto-restarting on file changes):
    ```bash
    npm run dev
    ```
    The backend will be running at `http://localhost:5000`.

### Frontend Setup

1.  **Navigate to the frontend directory** (in a new terminal):
    ```bash
    cd frontend
    ```
2.  **Install dependencies**
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    ```
    The React app will open at `http://localhost:5173` (or the next available port).