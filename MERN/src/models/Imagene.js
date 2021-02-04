const mongoose = require("mongoose");
const path = require("path");
const { Schema } = mongoose;

const ImageSchema = new Schema({
  imagen: { type: String },
  titulo: { type: String },
  description: { type: String },
});
module.exports = mongoose.model("Imagen", ImageSchema);
