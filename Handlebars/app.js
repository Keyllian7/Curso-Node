require('dotenv').config();
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

// Configurações

    // Template Engine

        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

    // Conexão com o banco de dados

        const Sequelize = require("sequelize")
        const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.SENHA, {
            host: "localhost",
            dialect: "mysql"
        })
        sequelize.authenticate().then(function(){
            console.log("Conectado com sucesso!")
        }).catch(function(erro){
            console.log("Falha ao se conectar: " + erro)
        })

// Rotas

        app.get('/cadastro', function(req, res){
            res.render('form')
        })









app.listen(8081, function(){
    console.log('Servidor online! http://localhost:8081');
});