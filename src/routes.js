const express = require('express');
const route = express.Router();
const productListController = require('./controllers/productListController')
const productRegisterController = require('./controllers/productRegisterController')

//Rota para registrar um novo produto no banco de dados
route.post('/register', productRegisterController.register)
//Rota para retornar todos os produtos registrados no banco de dados
route.get('/estoque', productListController.productList)
//Roda para retornar um unico produto pelo id
route.get('/produto/:id', productListController.product)
//Roda para deletar um produto do banco de dados
route.delete('/editar/:id', productListController.delete)
//Roda para editar um produto do banco de dados
route.patch('/editar/:id', productListController.edit)

route.get('/register',productRegisterController.page)
module.exports = route;