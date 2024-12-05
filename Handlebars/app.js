require('dotenv').config();
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

// Configurações
    // Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

// Rotas
        app.get('/cadastro', function(req, res){
            req.body.titulo
            res.render('form')
        })

        app.post('/adicionar', function(req, res){
            res.send('Texto:' + req.body.titulo + " " + 'Conteudo:' + req.body.conteudo)
        })

app.listen(8081, function(){
    console.log('Servidor online! http://localhost:8081');
});