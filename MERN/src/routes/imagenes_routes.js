const express = require("express");
const router = express.Router();
const Imagen = require("../models/Imagene.js");

router.get("/", async (req, res) => {
  res.send("ja está")
});

router.get("/:id", async (req, res) => {
  const Imagen = await Imagen.findById(req.params.id);
  res.json(Imagen);
});

router.post("/", async (req, res) => {
  const { nombre, apellido, carnet, direccion, telefono } = req.body;
  const newImagen = new Imagen({
    nombre,
    apellido,
    carnet,
    direccion,
    telefono,
  });
  await newImagen.save();
  res.json({ status: " Tarea guardada "});
});

router.put("/:id", async (req, res) => {
  const { nombre, apellido, carnet, direccion, telefono } = req.body;
  const newImagen = { nombre, apellido, carnet, direccion, telefono };
  await Imagen.findByIdAndUpdate(req.params.id, newImagen);
  res.json({ status: "Imagen Updated" });
});

router.delete("/:id", async (req, res) => {
  await Imagen.findByIdAndRemove(req.params.id);
  res.json({ status: "Imagen Deleted" });
});

module.exports = router;
