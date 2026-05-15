const express = require("express");

const usuariosRoutes = require("./routes/usuarios.routes");

const app = express();

app.use(express.json());

const rotasDeLivros = require('./routes/livros.routes');

app.use('/livros', rotasDeLivros);
app.use("/usuarios", usuariosRoutes);

module.exports = app;
