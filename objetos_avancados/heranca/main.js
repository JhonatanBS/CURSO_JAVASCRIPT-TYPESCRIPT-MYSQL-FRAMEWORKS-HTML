/*
Herança: Faz um objeto herdar as chaves ou valores de outro objeto
Objectcreate: Cria um objeto vazio.
*/

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

/*const camiseta = new Produto("Camiseta",100);
camiseta.aumento(50);

console.log(camiseta);*/

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

function Caneca(nome, preco, material,estoque){
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this,"estoque",{
         enumerable: true,
         configurable:false,

         get: function(){
             return estoque;
         },
         set: function(valor){
             if(typeof valor !== "number") return;
             estoque = valor;
         }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto("Short", 55);
const camiseta = new Camiseta("Regata", 70, "amarela");
const caneca = new Caneca("Xícara", 80, "plástico", 10);
camiseta.aumento(100);
caneca.estoque = 100;

console.log(produto);
console.log(camiseta);
console.log(caneca);
console.log(caneca.estoque);