const database = require('../database')

exports.estoque = (req, res) => {
    res.send(database.getProdutos())
}

exports.produto = (req,res) => {
    res.send(database.getProduto(req.params.id))
}

exports.deleteProduto = (req,res) => {
    const produto = database.deleteProduto(req.params.id);
    res.send(produto)
}
exports.alterarProuto = (req,res) => {
    const id = req.params.id;
    const newData = database.updateProduto(id,req.body);
    res.send(`Produto atualizado - ID: ${id}`)
}