const ProductModel = require('../models/ProductModel.js');

exports.productList = async (req,res) => {
    const produtos = await ProductModel.find();
    res.send(produtos)
}

exports.product = async(req, res) => {
    const produto = await ProductModel.findById(req.params.id);
    res.send(produto)
}

exports.delete = async(req, res) => {
    const produto = await ProductModel.findByIdAndDelete(req.params.id)
    res.send(`${produto}\nProduto deletado com sucesso!`)
}

exports.edit = async(req, res) => {
    const id = req.params.id
    const produto = req.body
    const produtoAtualizado = await ProductModel.findByIdAndUpdate(id, produto, {new: true});
    res.send(produtoAtualizado)
}