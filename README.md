## RESTful API Inventory App for Fasteners

Currently, a basic outline of a RESTful API to keep an inventory of parts.

It is a CRUD app that uses the Sequelize ORM. Ultimately, it will be a basic inventory management application for fasteners, that
is the *long-term* goal.<br>

Slowly, I will build the frontend using HTML, CSS and JavaScript, no plans to use a frontend framework...too much to learn already. 🙃
<br><sub>(work-in-progress)</sub>

- -------------

### Category of Fasteners

| Screws  | Nuts | Bolts | Washers | Other |
| ------- | ---- | ----- | ------- | ----- |
| Wood    | Hex  | Hex   | Flat    |       |
| Machine |      |       | Lock    |       |
| Sheet   |      |       | Washer  |       |
| Socket  |      |       |         |       |
|         |      |       |         |       |
|         |      |       |         |       |


### Data Model / Schema

| Field       | Type   | Description             |
| :---------- | :----- | :---------------------- |
| partNumber  | String | Part number of the part |
| name        | String | Name of the part        |
| description | String | Description of the part |
| quantity    | Number | Quantity of the part    |
| price       | Number | Price of the part       |


### API Endpoints

| Endpoint   | HTTP Method | Description   |
| :--------- | :---------- | :------------ |
| /parts     | GET         | Get all parts |
| /parts/:id | GET         | Get a part    |
| /parts     | POST        | Create a part |
| /parts/:id | PUT         | Update a part |
| /parts     | DELETE      | Delete a part |


#### Installation

-   Clone the repo
-   Run `npm install`
