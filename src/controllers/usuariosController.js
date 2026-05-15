const usuarios = require("../models/usuarioModel");

const listarUsuarios = (req, res) => {
    res.json(usuarios)
};

const criarUsuario = (req, res) => {
    const {nome, email, telefone, matricula} = req.body

    const novoUsuario = {
        id: usuarios.length + 1,
        nome,
        email,
        telefone,
        matricula
    }

    usuarios.push(novoUsuario)

    res.status(201).json(novoUsuario)
}

module.exports = {
    criarUsuario,
    listarUsuarios
}