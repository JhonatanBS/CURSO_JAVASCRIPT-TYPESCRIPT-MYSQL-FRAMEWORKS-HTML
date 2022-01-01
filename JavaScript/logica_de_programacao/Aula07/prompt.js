let numero1 = prompt("Digite um número:");
let numero2 = prompt("Digite um número:");

console.log( typeof numero1,typeof numero2);

numero1 = Number(numero1);
numero2 = Number(numero2);

console.log( typeof numero1,typeof numero2);

let resultado = numero1 + numero2;

console.log(resultado);

alert(`Modo 1: O resultado desta soma é ${resultado}`);
/*OU*/
alert(`Modo 2: O resultado desta soma é ${numero1 + numero2}`);