const express = require("express");

const router = express.Router();

const {
    criarUsuario
} = require("../controllers/usuariosController");

router.post("/", criarUsuario);

module.exports = router;