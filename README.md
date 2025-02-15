# User Authentication and Search API

This is a **backend web application** built with **Express.js, MongoDB, and JWT** for user registration, login, and searching users by username or email. The API allows secure authentication and stores user data in a **MongoDB database**. The project is tested using **Postman**.

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB with Mongoose ORM  
- **Authentication**: JWT (JSON Web Tokens)  
- **Validation**: Express Validator  
- **API Testing**: Postman  

---


## 🚀 Features

- **User Registration**: Register a new user with username, password, full name, gender, date of birth, and country.  
- **User Login**: Authenticate users and return a JWT token for authorization.  
- **Search User**: Search a user by username or email and retrieve their information.  
- **Secure Authentication**: Uses JWT for access token management.  
- **Error Handling & Validations**: Ensures data integrity and security.  

---


## 📝 API Endpoints

| Method | Endpoint      | Description |
|--------|--------------|--------------|
| POST   | `/user/register` | Register a new user |
| POST   | `/user/login`    | Authenticate user and get JWT token |
| GET    | `/user/search`   | Search user by username or email |


---


## 🔐 Authentication & Authorization

- After login, the user receives a **JWT token**.
- This token must be sent in the **Authorization Header** as `Bearer <token>` for protected routes.

Example:

```bash
Authorization: Bearer <your_token>
```

---



## Installation &  Setup

To install and run this project locally, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/Omdeep-Tyagi/Toposel-Assignment.git
    ```

2. Navigate to the project directory:

    ```sh
    cd Toposel-Assignment
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

4. Create a `.env` file in the root directory and add the necessary environment variables. Refer to the sample `.env` file below for the required variables.



5. Start the development server:

    ```sh
    npm start
    ```

6. Open your browser and go to `http://localhost:3000`.


---

## Postman Collection (API Testing)

To test the API endpoints, use the following Postman collection:

🔗 [Click here to view the Postman collection](https://www.postman.com/aviation-pilot-89741121/my-workspace/collection/ek6njto/toposel-assignment?action=share&creator=40724566)

---

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.


---


## Acknowledgements

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Passport](http://www.passportjs.org/)


---


## Contact

For any inquiries or questions, please contact:

- GitHub: [Omdeep-Tyagi](https://github.com/Omdeep-Tyagi)
- LinkedIn: [Omdeep-Tyagi](https://www.linkedin.com/in/omdeep-tyagi-428854272/)
- Mail: tyagiom2308@gmail.com

---

## Sample .env File

```dotenv
# Sample .env file

# Port number for the server
PORT=3000

# MongoDB connection URI
CONNECTION_STRING=mongodb://localhost:27017/Toposel-Assignment

# Acsess Token secret
ACCESS_TOKEN_SECRET=your_secret_code
```

---

