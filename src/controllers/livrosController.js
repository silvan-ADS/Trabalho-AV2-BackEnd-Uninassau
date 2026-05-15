const livros = require("../models/livroModel");

const adicionarLivro = (req, res) => {
  const { titulo, autor, genero, anoPublicacao, quantidade, ISBN } = req.body;

  if (!titulo || !autor) {
    return res.status(400).json({
      erro: "Atenção: O título e o autor do livro são obrigatórios!",
    });
  }

  const novoLivro = {
    titulo,
    autor,
    genero,
    anoPublicacao,
    quantidade,
    ISBN
  };

  livros.push(novoLivro);

  res.status(201).json({
    mensagem: "Livro adicionado com sucesso!",
    livroAdicionado: novoLivro,
  });
};

module.exports = {
  adicionarLivro
};
