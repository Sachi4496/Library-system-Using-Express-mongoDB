const express = require('express');
const Author = require('../model/author.model');



const router = express.Router();

router.post('', async function (req, res) {
    try {
        const author = await Author.create(req.body);
        return res.status(200).send(author);
    }
    catch (err) {
        return res.status(500).send(err);
    }
});

module.exports = router;