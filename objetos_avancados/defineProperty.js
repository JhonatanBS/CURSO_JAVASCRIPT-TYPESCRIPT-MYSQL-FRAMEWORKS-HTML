// defineProperty - defineProperties
function Produto(nome, preco, estoque){
   this.nome = nome;
   this.preco = preco;
   
   Object.defineProperty(this,"estoque",{
       enumerable: true,//Mostra o valor
       value: estoque,//Mostra
       writable: true,
       configurable:true
   })
}

const prod1 = new Produto("Blusa", 30, 10);
console.log(prod1);

for(let chave in prod1){
    console.log(chave);
}