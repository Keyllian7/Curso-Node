require('dotenv').config();
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/post');

// Configurações
    // Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

// Rotas

        app.get("/", function(req, res){
            res.render('home')
        })

        app.get('/cadastro', function(req, res){
            req.body.titulo
            res.render('form')
        })

        app.post('/adicionar', function(req, res){

            Post.create({
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
            }).then(function(){
                res.redirect('/')
            }).catch(function(erro){
                res.send("Erro ao criar o post: " + erro)
            })
        })

app.listen(8081, function(){
    console.log('Servidor online! http://localhost:8081');
});