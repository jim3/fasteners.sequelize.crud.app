const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=-

// Set the MIME type for the static files
app.use(
    "/public",
    express.static("public", {
        setHeaders: (res, path, stat) => {
            if (path.endsWith(".css")) {
                res.setHeader("Content-Type", "text/css");
            }

            if (path.endsWith(".js")) {
                res.setHeader("Content-Type", "text/javascript");
            }

            if (path.endsWith(".png")) {
                res.setHeader("Content-Type", "image/png");
            }
        },
    })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Assign root route to index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/", require("./routes/fastenerRoute"));

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=-

// Sync the database
const db = require("./models/fastenerModel");
db.sequelize.sync().then(() => {
    console.log("Synced db.");
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
