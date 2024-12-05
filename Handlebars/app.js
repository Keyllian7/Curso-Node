require('dotenv').config();
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/post');

// Configurações
    // Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main',
            runtimeOptions: {allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true}}));
        app.set('view engine', 'handlebars');
    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

// Rotas

        app.get("/", function(req, res){
            Post.findAll({order: [['id', 'DESC']]}).then(function(postagens){
                res.render("home", {postagens: postagens})
            })
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

        app.get('/deletar/:id', function(req, res){
            Post.destroy({where: {'id': req.params.id}}).then(function(){
                res.send("Postagem deletada com sucesso!")
            }).catch(function(erro){
                res.send("Erro ao deletar postagem: " + erro)
            })
        })

app.listen(8081, function(){
    console.log('Servidor online! http://localhost:8081');
});