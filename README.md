## Fastener Inventory API 
A CRUD app that uses the Sequelize ORM<br>
<sub>(work-in-progress)</sub>

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

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


# API Endpoints

| Endpoint   | HTTP Method | Description   |
| :--------- | :---------- | :------------ |
| /parts     | GET         | Get all parts |
| /parts/:id | GET         | Get a part    |
| /parts     | POST        | Create a part |
| /parts/:id | PUT         | Update a part |
| /parts     | DELETE      | Delete a part |


# Installation

-   Clone the repo
-   Run `npm install`
