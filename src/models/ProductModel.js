const mongoose = require('mongoose');
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
    }
})

ProductSchema.pre('save', async function(next){
    if(!this._id){
        const count = await ProductModel.countDocuments();
        this._id = count + 1;
    }
    next()
})

const ProductModel = mongoose.model('Produtos', ProductSchema);
module.exports = ProductModel;