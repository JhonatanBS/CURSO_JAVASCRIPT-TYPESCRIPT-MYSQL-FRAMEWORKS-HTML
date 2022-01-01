/*
Referência (Mutáveis) - array, object, function -> Passados por referêcias.
*/

const pessoa = {
    nome: "Maria",
    Sobrenome: "Silva",
    Cadastro: 5469865654.4,

    cpf(){
        console.log(`${this.nome} ${this.Sobrenome} tem o cpf ${this.Cadastro}`)
    }
};
/*Valores passados por referencia, podem ser alterados*/
pessoa.nome = "Joana";
pessoa.cpf();
const humano = pessoa;// A constante não recebeu os valores, ela aponta para os valores, por isso que quando um altera, os outros também são alterados
humano.cpf();
