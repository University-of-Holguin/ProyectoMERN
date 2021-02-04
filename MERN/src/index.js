const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const app = express();
const cors = require("cors");

//Settings
app.set("port", process.env.PORT || 3001);
//Middlewares
require("./database");
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  multer({ dest: path.join(__dirname, "./public/images") }).single("image")
);
//Routes
app.use("/api/imagenes", require("./routes/imagenes_routes.js"));
app.use("/api/ventas", require("./routes/ventas_routes.js"));
app.use("/api/funcionarios", require("./routes/funcionarios_routes.js"));
//Static files
app.use(express.static(path.join(__dirname, "public")));

//Starting server
app.listen(app.get("port"), () => {
  console.log("Server on port: ", app.get("port"));
});
