const express = require("express");
const router = express.Router();
const Funcionario = require("../models/Fumcionario.js");

router.get("/", async (req, res) => {
  const funcionarios = await Funcionario.find();
  res.json(funcionarios);
});

router.get("/:id", async (req, res) => {
  const funcionario = await Funcionario.findById(req.params.id);
  res.json(funcionario);
});

router.post("/", async (req, res) => {
  const {
    nombre,
    apellido,
    carnet,
    email,
    direccion,
    telefono,
  } = req.body;
  const newFuncionario = new Funcionario({
    nombre,
    apellido,
    carnet,
    email,
    direccion,
    telefono,
  });
  await newFuncionario.save();
  res.json({ status: "Tarea guardada" });
});

router.put("/:id", async (req, res) => {
  const {
    nombre,
    apellido,
    carnet,
    email,
    direccion,
    telefono,
  } = req.body;
  const newFuncionario = {
    nombre,
    apellido,
    carnet,
    email,
    direccion,
    telefono,
  };
  await Funcionario.findByIdAndUpdate(req.params.id, newFuncionario);
  res.json({ status: "Funcionario Updated" });
});

router.delete("/:id", async (req, res) => {
  await Funcionario.findByIdAndRemove(req.params.id);
  res.json({ status: "Funcionario Deleted" });
});

module.exports = router;
