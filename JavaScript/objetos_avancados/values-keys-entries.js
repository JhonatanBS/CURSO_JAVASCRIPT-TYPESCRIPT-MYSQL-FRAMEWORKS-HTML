/*
Object.keys: Retorna as chaves do objeto
Object.values: Retorna os valores
Object.entries: Retorna as chaves e os valores do objeto
*/

const pessoa = {nome: "Paulo", idade: 25, cor: "branca"};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

for(objetos of Object.entries(pessoa)){
    console.log(objetos);
}