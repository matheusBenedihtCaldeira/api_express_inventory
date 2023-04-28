const ProductModel = require('../models/ProductModel.js');

exports.register = async(req, res) => {
    const {nome,preco,quantidade} = req.body;

    const produto = new ProductModel({
        nome,
        preco,
        quantidade
    });
    try{
        await produto.save();
        console.log(produto)
        res.send(console.log("Produto salvo"))
    
    }catch(err){
        console.log(err)
        res.send(console.log(err))
    }
}