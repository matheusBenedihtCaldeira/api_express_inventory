const mongoose = require('mongoose');
//Schema de produtos
const ProductSchema = new mongoose.Schema({
    _id: {type: Number},
    nome: {
        type: String,
        required: true
    },
    preco:{
        type: Number, 
        required: true
    },
    quantidade:{
        type: Number, 
        required: true
    },
    descricao:{
        type: String, 
        required: false
    }
})
//Adiciona um ID incremental para cada produto registrado
ProductSchema.pre('save', async function(next){
    if(!this._id){
        const count = await ProductModel.countDocuments();
        this._id = count + 1;
    }
    next()
})
//Transofrma o Schema em model
const ProductModel = mongoose.model('Produtos', ProductSchema);
module.exports = ProductModel;