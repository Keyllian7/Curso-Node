var http = require('http')

http.createServer(function(req, res){
    res.end("Hello Word, Wellcome to my website!")
}).listen(8081)

console.log("O servidor está online!")