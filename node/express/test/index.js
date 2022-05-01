const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

//Config
  // Template Engine
    app.engine("handlebars", handlebars.engine({defaultLayout: 'main'}));
    app.set("view engine", "handlebars");
//   Conexão com banco de dados Mysql
    const Sequelize = require("sequelize");
    const sequelize = new Sequelize("test", "root", "123456789",{
        host: "localhost",
        dialect: "mysql"
    });

    app.get("/cad", function(req, res){
       res.render("formulario");
    });

    app.post("/add", function(req,res){
        res.send("Formulario Recebido!");
    });

// app.get("/" ,function(req,res){
//     res.send("Seja bem vindo ao meu app");
// });

// app.get("/sobre", function(req, res){
//     res.send("Seja bem vindo ao Sobre");
// });

// app.get("/blog",function(req , res){
//     res.send("<h1>Seja bem vindo ao meu Blog</h1>" + "<p>Sobre</p>");
// });

// app.get("/saudacao/:nome/:cargo/:salario", function(req,res){
//     res.send("<p>Ola, meu nome é " + req.params.nome + " e trabalho como " + req.params.cargo + " e meu salário é " + req.params.salario + " reais");
// });

//localhost:8081
app.listen(8081,function(){
    console.log("Servidor rodando na porta 8081");
});