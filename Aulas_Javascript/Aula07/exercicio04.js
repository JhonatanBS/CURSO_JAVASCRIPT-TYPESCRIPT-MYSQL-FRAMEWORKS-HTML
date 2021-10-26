let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A
/*let aux = varA;*/

/*
1° Modo primitivo
varA = varB;
varB = varC;
varC = aux;
*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA,varB,varC);