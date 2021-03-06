const express = require("express");

const Book = require("../model/book.model");
const author = require("../model/author.model");
const section = require("../model/section.model");


const router = express.Router();



router.post("", async (req, res) => {
  try {
    const books = await Book.create(req.body);
    return res.status(201).send(books);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("", async (req, res) => {
  try {
    const book = await Book.find().populate({path: "author_id", select : "first_name last_name"}).lean().exec();

    return res.send(book);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});


router.delete("/:id", async (req, res) => {
  try{
      const book = await Book.findByIdAndDelete(req.params.id).lean().exec()
      res.status(201).send(book)
  }catch(e){
      return res.status(500).json({message: e.message, status: "Failed"})
  }
})


module.exports = router;