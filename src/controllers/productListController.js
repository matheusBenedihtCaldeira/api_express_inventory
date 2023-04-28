const ProductModel = require('../models/ProductModel.js');

exports.productList = async (req,res) => {
    const produtos = await ProductModel.find();
    console.log(produtos)
    res.send(produtos)
}