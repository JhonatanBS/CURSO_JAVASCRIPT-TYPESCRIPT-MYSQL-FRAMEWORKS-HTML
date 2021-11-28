/*
Array: são representados por colchetes []
Lista: são arrays que tem dentro outros arrays[[],[],[]]
... variavel -> retorna o resto do array
*/

const numero = [ 15, 65, 89, 74, 98, 100, 77];
const [ um, dois, tres, ...quarto] = numero;
console.log(quarto);

const lista = [[ 1, 2, 3], [ 4, 5, 6], [ 7, 8, 9]];
const [lista1, lista2, lista3] = lista;
console.log(lista1[0],lista2[1],lista3[2]);