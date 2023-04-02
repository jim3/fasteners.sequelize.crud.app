const express = require("express");
const app = express();

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=- //

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use("/public", express.static("public", {
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

// Route for the home page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/api/fasteners", require("./routes/fastenerRoute"));

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=- //

const db = require("./models/fastenerModel");

db.sequelize.sync().then(() => {
    console.log("Synced db.");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=- //
