# Secure User Authentication Login/SignUp page with Node.js

## Overview
This project is a secure and modular user authentication Login/SignUp page built using **Node.js**, **Express**, and **bcrypt** for password hashing. It provides a clean and robust solution for implementing login and signup functionality with a focus on data security. The project utilizes **EJS** as a templating engine and **MongoDB** for database management.

## Features
- **User Registration**: Allows users to sign up with their details, including a hashed password for secure storage.
- **User Login**: Users can log in with a verified username and password.
- **Password Security**: Passwords are hashed using **bcrypt** to ensure data security.
- **Dynamic Templating**: Uses **EJS** to render dynamic pages.
- **Form Validation**: Validates input fields for registration and login.
- **Error Handling**: Handles cases like duplicate emails/usernames and incorrect login credentials.

## Technologies Used
- **Node.js**: Handles the backend logic and server-side operations.
- **Express.js**: Simplifies the routing and middleware integration.
- **EJS**: Renders dynamic HTML templates.
- **MongoDB**: Stores user data securely.
- **bcrypt**: Hashes passwords to enhance security.

## How It Works
1. **User Signup**: Users provide their first name, last name, email, username, and password. The password is hashed before being stored in the database.
2. **User Login**: Users log in with their username and password. The system verifies the hashed password before granting access.
3. **Home Page**: After successful login, users are redirected to a home page.
4. **Error Handling**: Displays messages for invalid logins or existing accounts.

## Contributing
Contributions are welcome! If you have suggestions for improvements, feel free to open an issue or submit a pull request.


