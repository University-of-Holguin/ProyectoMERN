const mongoose = require("mongoose");
const { Schema } = mongoose;

const ventaSchema = new Schema({
  nombre_peinado: { type: String, required: true },
  precio: { type: Number, required: true },
  cantidad: { type: Number, required: true },
 
});

module.exports = mongoose.model("Venta", ventaSchema);
