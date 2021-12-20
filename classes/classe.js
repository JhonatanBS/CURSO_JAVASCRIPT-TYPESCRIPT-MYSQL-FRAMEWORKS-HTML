/*
Classes: Se comportam da mesma maneira que uma função construtora.
Vantagem: Não precisamos inserir os métodos no prototype, a classe já implementa sozinho
*/

class Aluno{
    constructor(nome, idade, matricula){
       this.nome = nome;
       this.idade = idade;
       this.matricula = matricula;
    }

    estudando (){
        console.log(`${this.nome} está estudando`);
    }

    dados(){
        console.log(`${this.nome} tem ${this.idade} anos e tem matrícula ${this.matricula}`);
    }
}

function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const a1 = new Aluno("Paulo", 25, "124578-2");
const prod1 = new Produto("Video Game", 2800);

a1.estudando();
a1.dados();
prod1.aumento(100);
console.log(prod1);