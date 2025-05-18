# 🔐 BDD Microservice - Back Office

This backend microservice manages access to a local database for internal operations.

---

## 🚀 How It Works

The service exposes **multiple routes** that interact with the local database.

---

## 📦 Installation & Launch

### Clone the project

    >   git clone <repo-url>

### Navigate to the project folder

    >   cd project-folder-name

### Install dependencies

    >   npm install

### Add environment variables

Create a `.env` file at the root of the project with the following content :

```
PORT=3000
JWT_SECRET=test123
DATABASE_URL="file:./dev.db"
```

### Run tests

    >   npm test

### Start the server

    >   npm start

---

## 📡 Available Route

### User Routes (`/user`)

- **GET /user** : Retrieves information about the authenticated user.

  - Authentification : Requires a valid token.
  - Postman Example:
    - **Method** : GET
    - **URL** : `http://localhost:3000/user`
    - **Headers** : `Authorization: Bearer <token>`

- **PUT /user/:id** : Updates the user's information based on the specified ID.
  - Authentification : Requires a valid token.
  - Postman Example:
    - **Method** : PUT
    - **URL** : `http://localhost:3000/user/1`
    - **Headers** : `Authorization: Bearer <token>`
    - **Body** : `{ "firstName": "John", "lastName": "Doe", "email": "john.doe@example.com" }`

### Skill Routes (`/skills`)

- **GET /skills** : Retrieves the list of all skills.

  - Authentification : Requires a valid token.
  - Postman Example:
    - **Method** : GET
    - **URL** : `http://localhost:3000/skills`
    - **Headers** : `Authorization: Bearer <token>`

- **POST /skills** : Creates a new skill.

  - Authentification : Requires a valid token.
  - Postman Example:
    - **Method** : POST
    - **URL** : `http://localhost:3000/skills`
    - **Headers** : `Authorization: Bearer <token>`
    - **Body** : `{ "value": "JavaScript" }`

- **DELETE /skills/:id** : Deletes the skill with the specified ID.
  - Authentification : Requires a valid token.
  - Postman Example:
    - **Method** : DELETE
    - **URL** : `http://localhost:3000/skills/1`
    - **Headers** : `Authorization: Bearer <token>`

### Service Routes (`/services`)

- **GET /services** : Retrieves the list of all services.

  - Authentification : Requires a valid token.
  - Postman Example:
    - **Method** : GET
    - **URL** : `http://localhost:3000/services`
    - **Headers** : `Authorization: Bearer <token>`

- **POST /services** : Creates a new service.

  - Authentification : Requires a valid token.
  - Postman Example:
    - **Method** : POST
    - **URL** : `http://localhost:3000/services`
    - **Headers** : `Authorization: Bearer <token>`
    - **Body** : `{ "title": "Consultation", "description": "Conseil sur le développement web", "price": 100.00 }`

- **DELETE /services/:id** : Deletes the service with the specified ID.
  - Authentification : Requires a valid token.
  - Postman Example:
    - **Method** : DELETE
    - **URL** : `http://localhost:3000/services/1`
    - **Headers** : `Authorization: Bearer <token>`

### Project Routes (`/projects`)

- **GET /projects** : Retrieves the list of all projects.

  - Authentification : Requires a valid token.
  - Postman Example:
    - **Method** : GET
    - **URL** : `http://localhost:3000/projects`
    - **Headers** : `Authorization: Bearer <token>`

- **POST /projects** : Creates a new project.

  - Authentification : Requires a valid token.
  - Postman Example:
    - **Method** : POST
    - **URL** : `http://localhost:3000/projects`
    - **Headers** : `Authorization: Bearer <token>`
    - **Body** :
    ```
    {
      "projectNumber": 1,
      "title": "Website Development",
      "description": "Development of a new website",
      "url": "http://example.com",
      "highlight1": "Modern UI",
      "highlight2": "Responsive design",
      "highlight3": "Fast loading",
      "highlight4": "SEO optimized",
      "highlight5": "Security focused"
    }
    ```

- **DELETE /projects/:id** : Deletes the project with the specified ID.
  - Authentification : Requires a valid token.
  - Postman Example:
    - **Method** : DELETE
    - **URL** : `http://localhost:3000/projects/1`
    - **Headers** : `Authorization: Bearer <token>`

---

## 🎴 Technologies Used

- ⚛️[**Express**](https://expressjs.com/): A minimal and flexible Node.js web application framework for building APIs and web applications.
- ⚛️[**@prisma/client**](https://www.npmjs.com/package/@prisma/client): A type-safe database client for Node.js, auto-generated based on your Prisma schema.
- ⚛️[**jsonwebtoken (JWT)**](https://www.npmjs.com/package/jsonwebtoken): Used to implement secure authentication using JSON Web Tokens.
- ⚛️[**CORS**](https://www.npmjs.com/package/cors): Middleware for enabling Cross-Origin Resource Sharing.
- ⚛️[**dotenv**](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file into process `.env`.

---

## 🔒 Security

_Even though the service is simple, the JWT token is signed with a secret key (`JWT_SECRET`). Make sure to **never** commit your `.env` file to a public repository._

---

## 📬 Notes

This microservice is designed to be used only in a **local Back Office context**.

It simply modifies a local database 😄

---

## 🏯 License

This project is licensed under the [MIT License](LICENSE.md) - share, modify, live in peace! ☠️

---

## 🗺️ Contact

For any inquiries, suggestions, or collaboration opportunities, don't hesitate to contact me. 📜

---

## 🧑🏻‍💻 Author

Created by TheLeon 🦁.

> "Creativity is intelligence having fun." - Albert Einstein ☄️

Thanks for visiting my github! 🩵

And as we say in France : Merci ! 💙🤍❤️