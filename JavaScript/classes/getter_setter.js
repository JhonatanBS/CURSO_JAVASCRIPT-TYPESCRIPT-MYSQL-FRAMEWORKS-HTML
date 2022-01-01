/*
  GETTER: Acessa e lê o elemento,não pode ter parâmetros.
  SETTER: Configura ou muda o elemento, deve ter no mínimo um parâmetro.
*/

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome + " " + this.sobrenome;
    }

    set nomeCompleto(expressao){
        expressao = expressao.split(" ");
        this.nome = expressao.shift();
        this.sobrenome = expressao.join(" ");
    }
}

const p1 = new Pessoa("Paulo", "José");
p1.nomeCompleto = " Matheus Silva Santos";
console.log(p1.nomeCompleto);