const express = require("express")
const app = express()


app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/info", function(req, res){
    res.send("Info")
})

app.get("/parm/:nome/:cargo/:idade", function(req, res){
    res.send(
        "<h1>Oi " + req.params.nome + "</h1>"+
        "<h2>Seu cargo é: " + req.params.cargo + "</h2>"+ 
        "<h3>Sua idade é: " + req.params.idade + "</h3>"
        )
})

app.listen(8081, function(){
    console.log("Servidor online!")
})