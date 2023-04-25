const database = require('../database');

exports.register = (req,res) => {
    const produto = database.saveProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        quantidade: req.body.quantidade
    })
    res.send(produto)
}