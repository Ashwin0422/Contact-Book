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

🐳 Docker Setup (Recommended)

This app is fully containerized using Docker Compose, allowing you to run the frontend, backend, and MongoDB together with a single command.

🧾 Prerequisites

- Docker Desktop
 installed and running

- (Optional) .env file for backend configuration


## ⚙️ How to Run Using Docker

1. Clone the repository

- git clone https://github.com/Ashwin0422/Contact-Book.git
- cd react-contacts-project


2. Build and start all services

- docker-compose up --build

This will:

- Start the backend server (Node + Express)
- Start the frontend (React)
- Start MongoDB inside a container

3. Access the application

- Frontend → http://localhost:3000
- Backend API → http://localhost:5000
- MongoDB → running in a container named mongodb

4. Stop the containers

- docker-compose down