// const nome = "Jonas";
// const sobrenome = "Silva";

// const falaNome = () => nome + " " + sobrenome;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;
//console.log(module.exports);

/* Forma reduzida do módulo*/

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;

/* Utilizando this*/

// this.profissao = "Desenvolvedor Full-Stack";
// console.log(exports);

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;