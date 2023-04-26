const express = require('express');
const route = express.Router();
const cadastroProdutoController = require('./controllers/cadastroProdutoController')
const listaProdutosController = require('./controllers/listaProdutosController')

route.post('/register', cadastroProdutoController.register)
route.get('/estoque', listaProdutosController.estoque)
route.get('/produto/:id', listaProdutosController.produto)
route.get('/produtos', listaProdutosController.listaDeProdutos)
route.delete('/produto/:id', listaProdutosController.deleteProduto)
route.patch('/produto/:id', listaProdutosController.alterarProuto)
module.exports = route;