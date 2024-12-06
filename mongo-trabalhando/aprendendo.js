const mongoose = require('mongoose');

// Conectando e configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/cursodb", {
    useMongoClient: true
}).then(() => {
    console.log("Conectado ao banco de dados");
}).catch((err) => {
    console.log("Erro ao conectar ao banco de dados " + err);
})