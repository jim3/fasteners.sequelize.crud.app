const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=- //
// Set up sequelize connection to the database
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "~/mydb.db", // path to sqlite db
});

// Test the connection
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=- //

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/api/fasteners", require("./routes/fastenerRoutes"));

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=- //
const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
