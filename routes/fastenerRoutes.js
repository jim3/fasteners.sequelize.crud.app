const express = require("express");
const router = express.Router();
const db = require("../models/fastenerModel");

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

router.get("/", async (req, res) => {
    try {
        const fasteners = await db.PartName.findAll();
        res.status(200).json({ success: true, data: fasteners });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to get fasteners" });
    }
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

router.post("/", async (req, res) => {
    try {
        const { partname } = req.body;
        await db.PartName.create({ partname });

        res.status(201).json({ success: true, message: "Fastener created" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to create fastener" });
    }
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

module.exports = router;
