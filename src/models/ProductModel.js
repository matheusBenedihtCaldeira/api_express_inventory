const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
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
    }
})
const ProductModel = mongoose.model('Produtos', ProductSchema);
module.exports = ProductModel;