//Função construtoras criam objetos
// Utilizam o new
//Geralmente essas funções são iniciadas com letra maiúsculas
function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    this.nomeCompleto = ()=>{
       console.log(`${this.nome} ${this.sobrenome}`);
    }
}

const p1 = new Pessoa("Jorge", "Luíz");
console.log(p1);
p1.nomeCompleto()