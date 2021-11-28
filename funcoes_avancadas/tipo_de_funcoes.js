/*function: Declarando usando a palavra function com nome da função e com ou sem parâmetros*/
function soma(a,b){
    return a + b;
}
console.log(soma(10,5));

/*Uma variável recebendo uma função*/
const subtracao = function(a,b){
    return a - b;
}
console.log(subtracao(100,15));

/*Arrow function*/
const arrowFunction = (a,b) =>  a * b;

console.log(arrowFunction(2,8));