const supabase = require("../config/supabase");

const listarLivros = async (req, res) => {
  const { data, error } = await supabase.from("livros").select("*");

  if (error) {
    return res.status(500).json({
      erro: error.message,
    })
  };

  res.json(data);
};

const adicionarLivro = async (req, res) => {
  const { titulo, autor, genero, anoPublicacao, quantidade, ISBN } = req.body;

  if (!titulo || !autor) {
    return res.status(400).json({
      erro: "Atenção: O título e o autor do livro são obrigatórios!",
    })
  };

  const novoLivro = {
    titulo,
    autor,
    genero,
    anoPublicacao,
    quantidade,
    ISBN,
  };

  const { data, error } = await supabase
    .from("livros")
    .insert([novoLivro])
    .select();

  if (error) {
    return res.status(500).json({
      erro: error.message,
    })
  };

  res.status(201).json({
    mensagem: "Livro adicionado com sucesso!",
    livroAdicionado: data,
  });
};

module.exports = {
  adicionarLivro,
  listarLivros,
};
