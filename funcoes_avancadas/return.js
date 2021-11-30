/*Return: Retorna valor, função, string, array, etc.*/
function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    };
}
/*As constante recebem as funções*/
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(4));