const express = require('express');
const route = express.Router();
const productListController = require('./controllers/productListController')
const productRegisterController = require('./controllers/productRegisterController')
route.post('/register', productRegisterController.register)
route.get('/estoque', productListController.productList)
module.exports = route;