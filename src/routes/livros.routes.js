const express = require("express");

const router = express.Router();

const {
  adicionarLivro,
  listarLivros
} = require("../controllers/livrosController");

router.post("/", livrosController.adicionarLivro);
router.get("/", livrosController.listarLivros);

module.exports = router;
