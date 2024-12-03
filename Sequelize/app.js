require('dotenv').config();

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