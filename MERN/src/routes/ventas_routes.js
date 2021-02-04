const express = require("express");
const router = express.Router();
const Venta = require("../models/Venta");

router.get("/", async (req, res) => {
  const ventas = await Venta.find();
  res.json(ventas);
});

router.get("/:id", async (req, res) => {
  const venta = await Venta.findById(req.params.id);
  res.json(venta);
});

router.post("/", async (req, res) => {
  const { nombre_peinado, precio, cantidad, fecha } = req.body;
  const newVenta = new Venta({
    nombre_peinado,
    precio,
    cantidad,
   
  });
  await newVenta.save();
  res.json({ status: "Venta guardada" });
});

router.put("/:id", async (req, res) => {
  const { nombre_peinado, precio, cantidad, fecha } = req.body;
  const newVenta = {
    nombre_peinado,
    precio,
    cantidad,
    
  };
  await Venta.findByIdAndUpdate(req.params.id, newVenta);
  res.json({ status: "Venta Updated" });
});

router.delete("/:id", async (req, res) => {
  await Venta.findByIdAndRemove(req.params.id);
  res.json({ status: "Venta Deleted" });
});

module.exports = router;
