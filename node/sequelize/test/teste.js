/* Após criar um banco de dados chamado test*/
const Sequelize = require("sequelize");
const sequelize = new Sequelize("test", "root", "123456789",{
    host: "localhost",
    dialect: "mysql"
});

/* Verifica se o node conectou ao banco de dados*/
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso");
}).catch(function(){
    console.log("Falha ao se conectar");
});

const Postagem = sequelize.define("postagens",{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

// Postagem.sync({force:true}); //Força a criação da tabela

// Postagem.create({
//     titulo: "Como treinar o seu Dragão",
//     conteudo: "Filme sobre a união de humanos com dragões"
// });

const Usuario = sequelize.define("usuarios",{
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
});

//Usuario.sync({force:true});

// Usuario.create({
//     nome: "Luiz",
//     sobrenome: "Silva",
//     idade: 26,
//     email: "luiz@gmail.com"
// });
