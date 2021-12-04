const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
      book_name: { type: String, require: true},
      body: { type: String, required: true },
      author_id: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "author",
          required: true,
        }
      ]
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("book", bookSchema);