/*
Herança: É quando classes filhas herdam atributos de uma classe pai.
Uso da função super para receber atributos do elemento pai.
*/

class Pai{
    constructor(nome, sobrenome, dinheiro){
       this.nome = nome;
       this.sobrenome = sobrenome;
       this.dinheiro = dinheiro;
    }

    nomeCompleto(){
        return this.nome + " " + this.sobrenome;
    }

    contaDinheiro(){
        return (`${this.nome} tem ${this.dinheiro}`);
    }
}

const pai = new Pai("José", "Silva", 350000);
console.log(pai);
console.log(pai.nomeCompleto());
console.log(pai.contaDinheiro());

class Maria extends Pai{
    constructor(nome,sobrenome,dinheiro,idade){
        super(nome);
        // this.nome = nome;
        this.sobrenome = sobrenome;
        this.dinheiro = dinheiro;
        this.idade = idade;
    }
}

const filha = new Maria("Maria", "Silva", 20000, 22);
console.log(filha);
console.log(filha.nomeCompleto());
