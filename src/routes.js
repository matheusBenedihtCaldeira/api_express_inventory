const express = require('express');
const route = express.Router();
const productListController = require('./controllers/productListController')
const productRegisterController = require('./controllers/productRegisterController')
route.post('/register', productRegisterController.register)
route.get('/estoque', productListController.productList)
route.get('/produto/:id', productListController.product)
route.delete('/editar/:id', productListController.delete)
route.patch('/editar/:id', productListController.edit)
module.exports = route;