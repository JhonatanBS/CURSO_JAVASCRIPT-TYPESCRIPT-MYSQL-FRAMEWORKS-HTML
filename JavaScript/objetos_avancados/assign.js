/*
Object.assign: Realiza uma cópia das chaves e valores de um objeto.
...spread: Realiza cópia das chaves e valores de um objeto.
*/

const produto = {nome: "Video Game", marca: "Playstation", preco: 1500};
const produto2 = Object.assign({},produto);//Primeira maneira com método
const copiaProduto = {...produto};// Segundo usando operador

produto2.nome = "Tv";
produto2.marca = "Philco";
produto2.preco = 5000;
console.log(produto);
console.log(produto2);
console.log(copiaProduto);