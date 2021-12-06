 /*
Filter: Filtra os elementos de uma array dependendo da condição usada.
1) Retorna um array
2) Realiza um laço de repetição e percorre em cada índice do array
3) Uso de funções dentro de filter
 */

const numero = [11, 52, 33, 14, 25, 6, 77, 8, 89, 10];
const maioresDez = numero.filter( valor => valor > 10);
console.log(maioresDez);

const pessoas = [
    {nome: "João", idade: 18},
    {nome: "Lucas", idade: 25},
    {nome: "Paulo", idade: 30},
    {nome: "Maria", idade:19},
    {nome: "Marta", idade: 52},
    {nome: "Vera", idade: 90},
];

const nomesGrandes = pessoas.filter(obj => obj.nome.length > 4);
const maisDeCinquentaAnos = pessoas.filter( obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith("a"));

console.log(nomesGrandes);
console.log(maisDeCinquentaAnos);
console.log(nomeTerminaComA);

