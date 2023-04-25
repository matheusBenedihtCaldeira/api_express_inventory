const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})