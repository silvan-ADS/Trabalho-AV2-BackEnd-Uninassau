const emprestimos = require("../models/emprestimoModel");

const livros = require("../models/livroModel");

const usuarios = require("../models/usuarioModel");

const listarEmprestimo = (req, res) => {
    res.json(emprestimos)
};

const criarEmprestimo = (req, res) => {
    const {idLivro, idUsuario} = req.body

    const livro = livros.find(livro => livro.id == idLivro)

    if(!livro) {
        return res.status(404).json({
            erro: "Livro não encontrado"
        })
    }

    if(livro.quantidade <= 0) {
        return res.status(400).json({
            erro: "Livro indisponível"
        })
    }

    const novoEmprestimo = {
        id: emprestimos.length + 1,
        idLivro,
        idUsuario,
        status: "emprestado"
    }

    livro.quantidade--

    emprestimos.push(novoEmprestimo)

    res.status(201).json({
        mensagem: "Empréstimo realizado com sucesso",
        emprestimo: novoEmprestimo
    })
};

module.exports = {
    criarEmprestimo,
    listarEmprestimo
};