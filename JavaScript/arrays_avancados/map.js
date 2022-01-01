/*
map -> Utiliza para mapear os arrays e também possui três parêmetros.
map (Valor atual do array, indice, o array de origem).
*/

const numero = [11, 52, 33, 14, 25, 6, 77, 8, 89, 10];
const numeroEmTriplo = numero.map(valor =>{
     return valor *3.
});

console.log(numeroEmTriplo);

const pessoas = [
    {nome: "João", idade: 18},
    {nome: "Lucas", idade: 25},
    {nome: "Paulo", idade: 30},
    {nome: "Maria", idade:19},
    {nome: "Marta", idade: 52},
    {nome: "Vera", idade: 90},
];

const nomes = pessoas.map(valor => valor.nome);
console.log(nomes);

const idades = pessoas.map(valor => valor.idade);
console.log(idades);

const id = pessoas.map((obj, indice) =>{
    const numId = {...obj};
    numId.id = indice;
    return numId;
});

console.log(id);