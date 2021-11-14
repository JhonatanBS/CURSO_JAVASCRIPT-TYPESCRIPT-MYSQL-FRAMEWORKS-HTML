/*
&& -> false && true -> Retorna false "o valor"
   0, NaN, false, undefined, "",'',``
|| -> vai retornar true ou "valor verdadeiro"
*/

//Encontra o primeiro verdadeiro ou falso e imprime na tela,
// caso não tenha, ele imprimirá o último valor

console.log(true && false);//False
console.log(false && "" && NaN && "Maria");//false

console.log(true || false);//True
console.log("João" || "0" || true);/*João*/