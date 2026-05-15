const express =  require("express");

const router = express.Router();

const {
    criarEmprestimo
} = require("../controllers/emprestimosController");

router.post("/", criarEmprestimo);

module.exports = router;