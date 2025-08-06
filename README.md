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

-   **Frontend:**
    -   **React:** The core JavaScript library for building the user interface.
    -   **Axios:** Used for making clean and efficient HTTP requests to the backend.
    -   **React Router:** Handles all the client-side routing, giving a single-page application feel.

-   **Backend:**
    -   **Node.js & Express:** The runtime and framework that power the server-side logic and RESTful API.
    -   **MongoDB & Mongoose:** The flexible NoSQL database and its modeling tool to handle all your quiz data.

## 🚀 Getting Started
Follow these simple steps to get the Quiz-Organizer running on your local machine.

### **Prerequisites**

-   **Node.js:** Ensure you have Node.js (v14 or higher recommended) and npm installed.
-   **MongoDB:** A running instance of MongoDB (local or cloud-based).

### **Installation**

1.  **Clone the repository:**
    bash -
    git clone [https://github.com/gopi-5/Quiz-Organizer.git](https://github.com/gopi-5/Quiz-Organizer.git)
    cd Quiz-Organizer
    
2.  **Install backend dependencies:**
    Navigate into the `server` directory and install the necessary packages.
    bash -
    cd server
    npm install
    
3.  **Install frontend dependencies:**
    Navigate into the `my-app` directory and install the necessary packages.
    bash -
    cd ../my-app
    npm install

4.  **Configure your .env file:**
    In the server folder, create a .env file and add your MongoDB connection string.
    env -
    MONGO_URI=your_mongodb_connection_string_here

### **Running the Application**

You must run the backend and frontend simultaneously in two separate terminals.

1.  **Start the backend server:**
    Open a terminal, navigate to the `server` directory, and run the server.
    ```bash
    cd server
    npm start
    ```
    The server will be live on `http://localhost:5000`.

2.  **Start the frontend client:**
    Open a **new** terminal, navigate to the `my-app` directory, and run the React development server.
    ```bash
    cd my-app
    npm start
    ```
    The app will automatically open in your browser at `http://localhost:3000`.
    
## 🤝 Contributing

We welcome contributions! If you have suggestions or find a bug, please feel free to open an issue or submit a pull request.

1.  Fork the repository.
2.  Create a new feature branch (`git checkout -b feature/amazing-feature`).
3.  Commit your changes (`git commit -m 'feat: Add amazing feature'`).
4.  Push to the branch (`git push origin feature/amazing-feature`).
5.  Open a Pull Request.
