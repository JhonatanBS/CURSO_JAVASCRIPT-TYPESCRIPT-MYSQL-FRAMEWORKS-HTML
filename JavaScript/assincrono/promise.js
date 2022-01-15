/*
Promise: Um objeto usado para processamento assíncrono, possuem três estados:
         Pendente, rejeitada e realizada, com os métodos then e catch.
*/

function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
      if(typeof msg !== "string") reject("erro");

      setTimeout(() =>{
          resolve(msg);
      },tempo);
    })
}

esperaAi("Conexão com O BD",rand(1,3))
   .then(resposta =>{
     console.log(resposta);
     return esperaAi("Buscando dados no Base", rand(1,3));
   })
   .then(resposta =>{
       console.log(resposta);
       return esperaAi(123456,rand(1,3));
   })
   .then(resposta =>{
       console.log(resposta);
   })
   .catch(e =>{
       console.log("Erro:", e);
   });

   const promises = [
    //    "Primeiro valor",
       esperaAi("Promise 1", 3000),
       esperaAi("Promise 2", 500),
       esperaAi("Promise 1", 1000),
    //    "Outro valor"
   ];

// Promise.all => Executa todas as itens da variável promises
Promise.all(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
});

// Promise.race => Executa o primeiro promise que ganhar
Promise.race(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
});
