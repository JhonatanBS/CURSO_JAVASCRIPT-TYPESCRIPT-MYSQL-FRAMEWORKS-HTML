/*
Operadores de Comparação

>   maior que
>=  maior que ou igual a que
<   menor que 
<=  menor que ou igual a que
==  Igualdade
=== Igualdade estrita(valor e tipo de dado)
!=  Diferença
!== Diferença estrito(valor e tipo de dado)
*/

console.log(10 > 5);//true
console.log(10 >= 5);//true
console.log(10 < 5);//false
console.log(10 <= 5);//false
console.log(10 == "5");//false
console.log(10 === "5");//false
console.log(10 != "5");//true
console.log(10 !== "5");//true
//Cuidado com esse tipo de declaração
const num1 = 70;
const num2 = "70";
const comp1 = num1 === num2;
const comp2 = num1 !== num2;
console.log(comp1);//false
console.log(comp2);//true
