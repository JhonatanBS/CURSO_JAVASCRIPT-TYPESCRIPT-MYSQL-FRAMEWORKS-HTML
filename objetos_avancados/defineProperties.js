// defineProperty - defineProperties
function Produto(nome, preco, estoque){
   
   Object.defineProperties(this,{
       nome: {
        enumerable: true,//Mostra o valor
        value: nome,//Mostra chave
        writable: true,//Alterar
        configurable:true//Configurável
       },
       preco: {
        enumerable: true,//Mostra o valor
        value: preco,//Mostra chave
        writable: true,//Alterar
        configurable:true//Configurável
       },
       estoque: {
        enumerable: true,//Mostra o valor
        value: estoque,//Mostra chave
        writable: true,//Alterar
        configurable:true//Configurável
       }
       
   })
}

const prod1 = new Produto("Blusa", 30, 10);
console.log(prod1);

for(let chave in prod1){
    console.log(chave);
}