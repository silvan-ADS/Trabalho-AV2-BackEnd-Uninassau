const express = require("express");

const usuariosRoutes = require("./routes/usuarios.routes");

const app = express();

app.use(express.json());

app.use("/usuarios", usuariosRoutes);

module.exports = app;
