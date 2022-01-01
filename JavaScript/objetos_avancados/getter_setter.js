// defineProperty - getter e setter
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;
    Object.defineProperty(this,"estoque",{
        enumerable: true,//Mostra o valor
        configurable: true,
        get: function(){
           return estoquePrivado;
        },
        set: function(valor){
           if(typeof valor !== "number"){
            throw new TypeError("Não é um número!");
           }
           estoquePrivado = valor; 
        }
        
    });
 }
 
 const prod1 = new Produto("Blusa", 30, 10);
 prod1.estoque = 600;
 console.log(prod1.estoque);
 
