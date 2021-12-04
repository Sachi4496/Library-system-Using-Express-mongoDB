const mongoose = require("mongoose");

// Post Mongoose
const sectionSchema = new mongoose.Schema(
  {
    section_name: { type: String, required: true },
    book_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
      required: true,
      unique: true
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("section", sectionSchema);