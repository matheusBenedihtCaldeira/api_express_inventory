const ProductModel = require('../models/ProductModel.js');

exports.page = (req,res)=>{
    res.render('index')
}


//Função responsável por registrar um produto no banco de dados
exports.register = async(req, res) => {
    const {nome,preco,quantidade} = req.body;

    const produto = new ProductModel({
        nome,
        preco,
        quantidade
    });
    try{
        await produto.save();
        res.send(`${produto}\nProduto salvo com sucesso!`)
    
    }catch(err){
        res.send(err)
    }
}