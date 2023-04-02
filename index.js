const express = require("express");
const app = express();

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=- //

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/api/fasteners", require("./routes/fastenerRoute"));

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=- //

const db = require("./models/fastenerModel");

db.sequelize.sync().then(() => {
    console.log("Synced db.");
});

const port = 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
