const express = require("express");

const router = express.Router();

const {
  adicionarLivro
} = require("../controllers/livrosController");

router.post("/", adicionarLivro);

module.exports = router;
