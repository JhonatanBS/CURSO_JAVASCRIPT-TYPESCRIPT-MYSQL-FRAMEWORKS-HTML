var http = require("http");

http.createServer(function(req,res){
    res.end("Ola Mundo");
}).listen(8081);

console.log("Servidor rodando");