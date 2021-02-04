const mongoose = require("mongoose");
const { Schema } = mongoose;

const funcionarioSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  carnet: { type: Number, required: true },
  email: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: Number },
});

module.exports = mongoose.model("Funcionario", funcionarioSchema);
