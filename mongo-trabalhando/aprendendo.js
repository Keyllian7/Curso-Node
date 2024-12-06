const mongoose = require('mongoose');

// Conectando e configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/cursodb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado ao banco de dados");
}).catch((err) => {
    console.log("Erro ao conectar ao banco de dados " + err);
})

// Models - Definindo
const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String,
        require: false
    }
});

// Collection
mongoose.model('usuario', UsuarioSchema);

const NewUsuario = mongoose.model('usuario');

// Salvando dados
new NewUsuario({
    nome: "Lucas",
    sobrenome: "Anderson",
    email: "lucas@example.com",
    idade: 20,
    pais: "China"
}).save().then(() => {
    console.log("Usuário criado com sucesso");
}).catch((err) => {
    console.log("Erro ao criar usuário " + err);
});