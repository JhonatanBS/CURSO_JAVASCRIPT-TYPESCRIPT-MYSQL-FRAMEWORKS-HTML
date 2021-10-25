/* 
Operações Aritméticas

+ (adição e concatenação)
- (Subtração)
* (Multiplicação ou Potenciação)
/ (Divisão)
% (Resto de divisão)
*/

const num1 = 10;
const num2 = 33;
const num3 = 50;
const num4 = 12;
const num5 = 4;

console.log( num1 + num2);
console.log( num2 - num4);
console.log( num1 * num5);
console.log( num1 ** num5);
console.log( num3 / num1);
console.log( num3 % num1);

/*
Prioridades de Operações

()
**
/ * %
+ -
*/ 

let resultado = (10 + 40) / 5 * 2 - 8;
console.log(resultado);

/*
Incremento é ++
Decremento é --
*/
var numero = 1;
numero++;
console.log(numero);
numero--;
console.log(numero);

/*Podemos simplicar operações com o (operador)=*/

var valor1 = 10;
const valor2 = 3;

valor1 += valor2;
console.log(valor1);
valor1 -= valor2;
console.log(valor1);
valor1 *= valor2;
console.log(valor1);
valor1 /= valor2;
console.log(valor1);

/*Convertendo strings*/

let c = 30;
let letra1 = parseInt("7");
let letra2 = parseFloat("7.8");

console.log(c + letra1);
console.log(c + letra2);
