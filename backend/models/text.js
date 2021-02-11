const mongoose = require("mongoose");

// Databse schema setup:
const textSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  text: String,
});

// This creates a new collection: Text
module.exports = mongoose.model("Text", textSchema);
