/*
Reduce: Reduz um array e retorna um valor.
Se o reduce não for iniciado, ele começará do índice 0 e o valor iniciará do índice 1
Reduce(acumulador, valor, índice, array original)
*/

const numeros = [22, 45, 78, 10, 5, 14, 1, 2, 3];
const acumula = numeros.reduce((acumulador, valor) => acumulador + valor);

console.log(acumula);

const pessoas = [
    {nome: "João", idade: 18},
    {nome: "Lucas", idade: 25},
    {nome: "Paulo", idade: 30},
    {nome: "Maria", idade:19},
    {nome: "Marta", idade: 52},
    {nome: "Vera", idade: 90},
];

const maiorIdade = pessoas.reduce((acumalador, valor) => {
    if(acumalador.idade > valor.idade) return acumalador;
    return valor;
})

console.log(maiorIdade);