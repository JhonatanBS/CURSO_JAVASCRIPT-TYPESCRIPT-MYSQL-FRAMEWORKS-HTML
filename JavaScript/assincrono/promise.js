/*
Promise: Um objeto usado para processamento assíncrono, possuem três estados:
         Pendente, rejeitada e realizada, com os métods then e catch.
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