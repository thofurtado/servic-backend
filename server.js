const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//iniciando o app
const app = express();
app.use(express.json());//permitir enviar dados para aplicação no formato json
app.use(cors());
//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser:  true,
    useUnifiedTopology: true
});
requireDir('./src/models');
//require('./src/models/Job');



//Chamando as Rotas
app.use('/api', require('./src/routes') );


//Porta de conexão da api
var porta = process.env.PORT || 8080;
app.listen(porta);
