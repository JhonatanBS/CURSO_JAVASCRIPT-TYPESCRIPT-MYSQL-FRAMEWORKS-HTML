/*
splice( índice, delete, inserção...)
*/

const nome = ["Maria", "Paulo", "Junior"];
nome.splice(nome.length, 0, "Julio", "Marcos");

console.log(`Adicionando: ${nome}`);

nome.splice(1,1);

console.log(`Removendo no meio: ${nome}`);

nome.splice(0,1);

console.log(`Removendo no começo: ${nome}`);

nome.splice(-1,1);

console.log(`Removendo no fim: ${nome}`);