/*
Primitivos (Imutáveis) - String, number, boolean, undefined, null(bigint, symbol) -> Valores  que pode ser copiados
*/

let A = 100;
let B = A;
let C = "Maria";
let D = C;
let F = true;
let G = F;
let H = null;
let I = H;
/*Tipo de dados primitivos, sempre realizaram uma cópia, o valor de uma varíavel não altera a outra variável*/
console.log(A,B);
console.log(C,D);
console.log(F,G);
console.log(H,I);