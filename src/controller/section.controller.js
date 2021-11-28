const express = require("express");
const Section = require("../model/section.model");

const router = express.Router();

router.post("", async (req, res) => {
    try {
        const post = await Section.create(req.body);

        return res.status(201).send(post);
    } catch (err) {
        return res.status(500).send(err);
    }
});

module.exports = router;