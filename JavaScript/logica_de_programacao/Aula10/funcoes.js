/*Função: Armazena dados que são recebidos, e sempre retornam valores quando são chamadas*/
function fatorial(x){
    if(x == 0)
       return 0;
    else if(x == 1)
       return x;
       
     return x*fatorial(x-1);
}

let numero = fatorial(10);
console.log(`O fatorial do número é ${numero}`);

/*Outra maneira de declarar uma função, fazendo uma variável receber a função*/
const raiz = function(n){
    return n ** 0.5;
}

console.log(raiz(9));
console.log(raiz(36));
console.log(raiz(81));

/*Outra maneira mais simples de declarar uma função*/
const soma = n =>  n + 10;
console.log(soma(10));