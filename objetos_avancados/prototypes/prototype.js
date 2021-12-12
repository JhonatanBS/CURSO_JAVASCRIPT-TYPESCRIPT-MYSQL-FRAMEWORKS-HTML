/*
Prototype: São o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros
*/

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
} 
//Pessoa.prototype === Pessoa.__proto__
/*O método prototype busca primeiro uma dentro da função construtora 
e logo após dentro do prototype, para melhor desempenho, criamos a função
que referenciará o prototype com um nome*/
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ` ` + this.sobrenome;
}

const p1 = new Pessoa("Paulo", "Silva");
const p2 = new Pessoa("Maria", "Souza");
const data = new Date();
console.log(p1);
console.log(p2);
console.log(p2.nomeCompleto());
console.log(data);