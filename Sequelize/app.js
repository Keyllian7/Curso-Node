require('dotenv').config();

const Sequelize = require("sequelize")
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.SENHA, {
    host: "localhost",
    dialect: "mysql"
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }

})

// Postagem.sync({force: true})
// Usuario.sync({force: true})


Postagem.create({
    titulo: "Um titulo qualquer",
    conteudo: "Um conteudo qualquer"
})

Usuario.create({
    nome: "Keyllian",
    sobrenome: "Azevedo",
    idade: 18,
    email: "keyllian@exemplo.com"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro)
})