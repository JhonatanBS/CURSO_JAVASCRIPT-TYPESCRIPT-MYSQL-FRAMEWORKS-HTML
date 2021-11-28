/*
Operadores Lógicos

&& -> and = E   Todas as comparações precisam ser iguais
|| -> or  = OU  Tanto uma ou outra precisar ser igual
!  -> not = Não ou negação retorna o inverso após negar 
*/

const nome = "Carlos";
const senha = 12345;

console.log(nome === "Carlos" && senha === 12345);//true
console.log(nome === "Carlos" && senha === 54321);//false

console.log(nome === "Carlos" || senha === 12345);//true
console.log(nome === "Carlos" || senha === 54321);//true

console.log(true);//true
console.log(!true);//false
