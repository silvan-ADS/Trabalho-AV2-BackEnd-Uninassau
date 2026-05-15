const express =  require("express");

const router = express.Router();

const {
    listarEmprestimo,
    criarEmprestimo
} = require("../controllers/emprestimosController");

router.get("/", listarEmprestimo);
router.post("/", criarEmprestimo);

module.exports = router;