const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = Schema({
  Name:        { type: String, required: true },
  Description: { type: String, required: true },
  Price:       { type: Number, required: true },
  ImageURL:    { type: String, required: true},
});

module.exports = mongoose.model('Product', productSchema)