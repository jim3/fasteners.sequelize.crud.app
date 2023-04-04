const express = require("express");
const router = express.Router();
const db = require("../models/fastenerModel");

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

router.get("/", (req, res) => {
    console.log("GET request received");
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

router.post("/", (req, res) => {
    console.log(req.body); // This is the object that is being sent from the client
    let partType = req.body.category;
    let partName = req.body.fastenertype;
    let quantity = req.body.quantity;
    let price = req.body.price;

    const responseObj = {
        partType: partType,
        partName: partName,
        quantity: quantity,
        price: price,
    };

    db.Parts.create(responseObj);
    console.log("POST request received");
     res.json(responseObj);
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

module.exports = router;
