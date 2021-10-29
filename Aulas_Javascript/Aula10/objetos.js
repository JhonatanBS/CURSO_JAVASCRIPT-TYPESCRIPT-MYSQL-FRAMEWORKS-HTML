/*
Objetos são parecidos com a struct em C, podemos colocar diversos tipos de dados,
e até métodos neles.
*/
const matricula = {
    nome: "Paulo",
    idade: 35,
    registro: 15435.5,

    dados(){
        console.log(`${this.nome} tem ${this.idade} e seu registro na faculdade é ${this.registro}`);
    },
    incrementoIdade(){
        this.idade++;
    }
};

console.log(matricula.nome);
console.log(matricula.idade);
console.log(matricula.registro);
matricula.dados();
matricula.incrementoIdade();
matricula.dados();