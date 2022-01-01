/**/

const aluno = {
   nome: "Malaquias",
   registro: "123456-7",
   curso: "Engenharia Civil",
   endereco:{
      quadra: 10,
      conjunto: "J",
      casa:100,
      rua: "Nova Colina"
   }
};

console.log(aluno.nome);
console.log(aluno.registro);
console.log(aluno.curso);
console.log(aluno.endereco);
console.log(aluno.endereco.quadra);
console.log(aluno.endereco.conjunto);
console.log(aluno.endereco.casa);
console.log(aluno.endereco.rua);

const {nome,registro,...curso} = aluno;
console.log(curso);

const{endereco:{casa,rua}}= aluno;
console.log(rua, casa);