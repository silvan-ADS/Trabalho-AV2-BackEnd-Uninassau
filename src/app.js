const express = require("express");

const app = express();

app.use(express.json());

const rotasDeLivros = require('./routes/livros.routes');

app.use('/livros', rotasDeLivros);

module.exports = app;
