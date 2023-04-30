const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const routes = require('./routes.js')
const mongoose = require('mongoose');
require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path');
//Realiza a conexão com o MongoDB
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connection established to MongoDB')
        app.emit('Ok')
    }).catch(err => console.error(err));



//Indica onde estara as Views
app.set('views', path.resolve(__dirname, 'views'));
//Seta a engine da view
app.set('view engine', 'ejs');
//Passa a pasta de arquivos estaticos para o express
console.log(__dirname, '..','public')
app.use(express.static(path.resolve(__dirname, '..','public')))
//Manda o Express usar o Routes
app.use(routes)
//Inicia o servidor apenas quando a conexão com o banco de dados for estabelecida
app.on('Ok', () => {
    app.listen(port, () => {
        console.log(`Listen on ${port}`);
    })
})

