/*
Objetos: Representado por chaves e elementos são acessados com o this 
*/

/*Function factory: Retorna um objeto*/
function aluno(){
    return{
        nome:"João",
        sobrenome: "Oliveira",
        matricula: "123654-7"
    }
}

const dados = aluno();
//console.log(dados);

// Cria uma objeto com o new Object();
const empregado = new Object();
empregado.nome = "Lucas";
empregado.sobrenome = "Santos";
empregado.salario = 1520.90;
//console.log(empregado);

// Função construtora
function cachorro(nome,raca,cor){
    this.nome = nome;
    this.raca = raca;
    this.cor = cor;

}

const informacao = new cachorro("Lulu", "labrador","amarelo");
console.log(informacao["nome"]);
console.log(informacao.raca);