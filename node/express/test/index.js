const express = require("express");
const app = express();

app.get("/" ,function(req,res){
    res.send("Seja bem vindo ao meu app");
});

app.get("/sobre", function(req, res){
    res.send("Seja bem vindo ao Sobre");
});

app.get("/blog",function(req , res){
    res.send("<h1>Seja bem vindo ao meu Blog</h1>" + "<p>Sobre</p>");
})

//localhost:8081
app.listen(8081,function(){
    console.log("Servidor rodando na porta 8081");
});