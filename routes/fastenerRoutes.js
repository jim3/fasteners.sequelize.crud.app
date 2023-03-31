const express = require("express");
const router = express.Router();
const Fasteners = require("../models/fastenerModel");

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Get all fasteners
router.get("/", async (req, res) => {
    try {
        const fasteners = await Fasteners.findAll();
        res.status(200).json({ success: true, data: fasteners });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to get fasteners" });
    }
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Create a new fastener
router.post("/", async (req, res) => {
    try {
        const { partnumber, description, quantity, price } = req.body;

        // Create a new fastener document :: (*) `create` === `build` & `save`
        const newFastener = Fasteners.create({ partnumber, description, quantity, price });

        res.status(201).json({ success: true, message: "Fastener created successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to create fastener" });
    }
});

module.exports = router;

