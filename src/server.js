const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const routes = require('./routes.js')
const mongoose = require('mongoose');
require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: true }));

//Realiza a conexão com o MongoDB
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connection established to MongoDB')
        app.emit('Ok')
    }).catch(err => console.error(err));


//Manda o Express usar o Routes
app.use(routes)
//Inicia o servidor apenas quando a conexão com o banco de dados for estabelecida
app.on('Ok', () => {
    app.listen(port, () => {
        console.log(`Listen on ${port}`);
    })
})

