// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (soma tudo)

const numero = [5, 1, 7, 10, 22, 15, 41, 2, 15, 6, 8, 44, 16];
const numerosPares = numero
     .filter(valor => valor % 2 === 0)
     .map(valor => valor * 2)
     .reduce((acumulador, valor) => acumulador + valor);

console.log(numerosPares);     
