/*
setPrototype: Faz um objeto herdar as configurações de outro objeto.
*/

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function (percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const prod1 = new Produto("Blusa", 300);
prod1.desconto(10);


const p2 = {
    nome: "Prato",
    preco: 5
}

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(50);
console.log(prod1);
console.log(p2);

const p3 = Object.create(Produto.prototype,{
   preco: {
       writable: true,
       configurable: true,
       value: 99,
       enumerable:true
   },
   tamanho:{
       writable: true,
       enumerable: true,
       value: 42,
       configurable: true
   } 
});

p3.aumento(10);
console.log(p3);