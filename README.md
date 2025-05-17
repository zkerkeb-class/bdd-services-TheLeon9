# API Documentation

## Introduction

Cette API permet de gérer les utilisateurs, les compétences, les services et les projets d'un système. Ce document récapitule toutes les routes disponibles et leur usage pour être utilisées dans des outils comme Postman.

## Routes

### Routes User (`/user`)

- **GET /user** : Récupère les informations de l'utilisateur connecté.
  - Authentification : Nécessite un token valide.
  - Exemple de requête Postman :
    - **Méthode** : GET
    - **URL** : `http://localhost:3000/user`
    - **Headers** : `Authorization: Bearer <token>`

- **PUT /user/:id** : Met à jour les informations de l'utilisateur avec l'ID spécifié.
  - Authentification : Nécessite un token valide.
  - Exemple de requête Postman :
    - **Méthode** : PUT
    - **URL** : `http://localhost:3000/user/1`
    - **Headers** : `Authorization: Bearer <token>`
    - **Body** : `{ "firstName": "John", "lastName": "Doe", "email": "john.doe@example.com" }`

### Routes Skill (`/skills`)

- **GET /skills** : Récupère la liste de toutes les compétences.
  - Authentification : Nécessite un token valide.
  - Exemple de requête Postman :
    - **Méthode** : GET
    - **URL** : `http://localhost:3000/skills`
    - **Headers** : `Authorization: Bearer <token>`

- **POST /skills** : Crée une nouvelle compétence.
  - Authentification : Nécessite un token valide.
  - Exemple de requête Postman :
    - **Méthode** : POST
    - **URL** : `http://localhost:3000/skills`
    - **Headers** : `Authorization: Bearer <token>`
    - **Body** : `{ "value": "JavaScript" }`

- **DELETE /skills/:id** : Supprime la compétence avec l'ID spécifié.
  - Authentification : Nécessite un token valide.
  - Exemple de requête Postman :
    - **Méthode** : DELETE
    - **URL** : `http://localhost:3000/skills/1`
    - **Headers** : `Authorization: Bearer <token>`

### Routes Service (`/services`)

- **GET /services** : Récupère la liste de tous les services.
  - Authentification : Nécessite un token valide.
  - Exemple de requête Postman :
    - **Méthode** : GET
    - **URL** : `http://localhost:3000/services`
    - **Headers** : `Authorization: Bearer <token>`

- **POST /services** : Crée un nouveau service.
  - Authentification : Nécessite un token valide.
  - Exemple de requête Postman :
    - **Méthode** : POST
    - **URL** : `http://localhost:3000/services`
    - **Headers** : `Authorization: Bearer <token>`
    - **Body** : `{ "title": "Consultation", "description": "Conseil sur le développement web", "price": 100.00 }`

- **DELETE /services/:id** : Supprime le service avec l'ID spécifié.
  - Authentification : Nécessite un token valide.
  - Exemple de requête Postman :
    - **Méthode** : DELETE
    - **URL** : `http://localhost:3000/services/1`
    - **Headers** : `Authorization: Bearer <token>`

### Routes Project (`/projects`)

- **GET /projects** : Récupère la liste de tous les projets.
  - Authentification : Nécessite un token valide.
  - Exemple de requête Postman :
    - **Méthode** : GET
    - **URL** : `http://localhost:3000/projects`
    - **Headers** : `Authorization: Bearer <token>`

- **POST /projects** : Crée un nouveau projet.
  - Authentification : Nécessite un token valide.
  - Exemple de requête Postman :
    - **Méthode** : POST
    - **URL** : `http://localhost:3000/projects`
    - **Headers** : `Authorization: Bearer <token>`
    - **Body** : 
    ```json
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

- **DELETE /projects/:id** : Supprime le projet avec l'ID spécifié.
  - Authentification : Nécessite un token valide.
  - Exemple de requête Postman :
    - **Méthode** : DELETE
    - **URL** : `http://localhost:3000/projects/1`
    - **Headers** : `Authorization: Bearer <token>`
