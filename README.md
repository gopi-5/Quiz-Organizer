# 🧠 Quiz-Organizer: The Ultimate Quiz Platform

## 👋 Welcome to Quiz-Organizer!

Tired of boring quizzes? Quiz-Organizer is a dynamic platform that lets you create, manage, and share interactive quizzes with ease. Whether you're a teacher preparing study materials or just looking to challenge your friends, this MERN stack application provides all the tools you need to become a quiz master.

## ✨ Features

-   **🖋️ Dynamic Quiz Creation:** Effortlessly build new quizzes with custom questions and multiple-choice answers.
-   **🚀 Interactive Quiz Play:** Take quizzes in a smooth, engaging, and fast-paced environment.
-   **📈 Dashboard Management:** View and manage all your created quizzes from a centralized, intuitive dashboard.
-   **⚙️ Full CRUD Functionality:** Create, Read, Update, and Delete quizzes with a seamless user experience.

## 💻 Tech Stack
Quiz-Organizer is a full-stack application built with the powerful MERN stack.

-   **Frontend:** React (Vite), React Router, Axios, Bootstrap
-   **Backend:** Node.js, Express, MongoDB, Mongoose

## 🚀 Getting Started

### **Prerequisites**

-   **Node.js:** Ensure you have Node.js (v18 or higher recommended) and npm installed.
-   **MongoDB:** A running instance of MongoDB (local or cloud-based).

### **Installation**

1.  **Install backend dependencies:**
    ```bash
    cd server
    npm install
    ```
    
2.  **Install frontend dependencies:**
    ```bash
    cd ../my-app
    npm install
    ```

3.  **Configure your `.env` file (optional):**
    In the `server` folder, create a `.env` file and add your MongoDB connection string (defaults to local if omitted).
    ```env
    MONGO_URI=your_mongodb_connection_string_here
    PORT=3001
    ```

### **Running the Application**

Start the backend and frontend in two terminals.

1.  **Start the backend server:**
    ```bash
    cd server
    npm start
    ```
    The server will run on `http://localhost:3001`.

2.  **Start the frontend client:**
    ```bash
    cd my-app
    npm run dev
    ```
    The app will run on `http://localhost:5173`. API requests to `/api/*` are proxied to `http://localhost:3001`.

## 🤝 Contributing

We welcome contributions! If you have suggestions or find a bug, please feel free to open an issue or submit a pull request.

1.  Fork the repository.
2.  Create a new feature branch (`git checkout -b feature/amazing-feature`).
3.  Commit your changes (`git commit -m 'feat: Add amazing feature'`).
4.  Push to the branch (`git push origin feature/amazing-feature`).
5.  Open a Pull Request.
