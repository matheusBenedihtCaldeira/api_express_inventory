const ProductModel = require('../models/ProductModel.js');

//Retorna todos os produtos registrados no banco de dados
exports.productList = async (req,res) => {
    const produtos = await ProductModel.find();
    res.send(produtos)
}
//Retorna um unico produto pelo id
exports.product = async(req, res) => {
    const produto = await ProductModel.findById(req.params.id);
    res.send(produto)
}
//Deleta um produto pelo id
exports.delete = async(req, res) => {
    const produto = await ProductModel.findByIdAndDelete(req.params.id)
    res.send(`${produto}\nProduto deletado com sucesso!`)
}
//Edita um produto pelo id
exports.edit = async(req, res) => {
    const id = req.params.id
    const produto = req.body
    const produtoAtualizado = await ProductModel.findByIdAndUpdate(id, produto, {new: true});
    res.send(produtoAtualizado)
}