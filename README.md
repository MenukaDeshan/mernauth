# MERN Authentication System

This project demonstrates a basic user authentication system using the MERN stack, including features for user registration and login.

## Table of Contents

- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [API Endpoints](#api-endpoints)
- [Features](#features)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [License](#license)

## Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/mern-auth.git
    cd mern-auth
    ```

2. **Install server dependencies**

    ```bash
    cd server
    npm install
    ```

3. **Install client dependencies**

    ```bash
    cd ../client
    npm install
    ```

## Technologies Used

- **Frontend**
  - React.js
  - Axios (for API requests)
  - React Router DOM (for navigation)

- **Backend**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose for object data modeling)
  - JWT (for user authentication)

## File Structure

```plaintext
mern-auth/
│
├── client/                     # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── pages/              # React pages
│   │   ├── App.js              # Main App component
│   │   ├── index.js            # Entry point for React
│   └── package.json            # Frontend dependencies
│
├── server/                     # Node.js backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js               # Main entry point for backend
│   └── package.json            # Backend dependencies
│
├── .env                        # Environment variables
└── README.md                   # Project documentation
```
## API Endpoints

### User Registration

- **URL:** `/api/auth/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**
    ```json
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "password": "password123"
    }
    ```
- **Response:**
    - **201 Created** on successful registration.
    - **400 Bad Request** if the user already exists.

### User Login

- **URL:** `/api/auth/login`
- **Method:** `POST`
- **Description:** Logs in a user.
- **Request Body:**
    ```json
    {
      "email": "johndoe@example.com",
      "password": "password123"
    }
    ```
- **Response:**
    - **200 OK** with JWT token on successful login.
    - **401 Unauthorized** if the credentials are incorrect.

## Features

- **User Registration**: Allows users to create an account by providing a name, email, and password.
- **User Login**: Allows users to log in to their account using their email and password.
- **Protected Routes**: Secured API endpoints that require JWT token authentication.

## Environment Variables

Create a `.env` file in the `server/` directory and add the following environment variables:

```plaintext
PORT=5000
MONGO_URI=your_mongo_database_uri
JWT_SECRET=your_jwt_secret_key
```

## Running the Application

1. **Start the Backend Server**

    ```bash
    cd server
    npm run dev
    ```

2. **Start the Frontend**

    ```bash
    cd client
    npm start
    ```

3. **Access the Application**

    Visit `http://localhost:3000` in your browser.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
