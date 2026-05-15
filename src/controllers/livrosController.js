const adicionarLivro = (req, res) => {
    
    const novoLivro = req.body;

    if (!novoLivro.titulo || !novoLivro.autor) {
        return res.status(400).json({ 
            erro: "Atenção: O título e o autor do livro são obrigatórios!" 
        });
    }

    res.status(201).json({
        mensagem: "Livro adicionado com sucesso!",
        livroAdicionado: novoLivro
    });
}; 

module.exports = {
    adicionarLivro
};