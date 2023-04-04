## RESTful API Inventory App for Fasteners

A Node/Express web app that uses the Sequelize ORM to interact with a SQLite3 database. Front-end is built with HTML, CSS and JavaScript.

### Description

This is a work-in-progress project to create a RESTful API for a basic inventory management application for fasteners. The app is built with Node.js, Express, and Sequelize. The database is SQLite3.<br>

You can check out a very crude demo at [https://jimmy3.xyz](https://jimmy3.xyz)

---

### API Endpoints

| Method | Endpoint | Description   |
| ------ | -------- | ------------- |
| GET    | /        | Get all parts |
| GET    | /:id     | Get one part  |
| POST   | /        | Add a part    |
| PUT    | /:id     | Update a part |
| DELETE | /:id     | Delete a part |

---

#### Installation

-   Install Node.js
-   Create your database (e.g. SQLite3, MySQL, Postgres, etc.)
-   Clone the repo
-   Run `npm install`
-   Run `node index.js`
-   Navigate to `localhost:3000`

---
