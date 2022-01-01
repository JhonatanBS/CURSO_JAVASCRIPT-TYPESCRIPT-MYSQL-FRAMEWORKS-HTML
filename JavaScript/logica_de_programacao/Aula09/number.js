let numero1 = 5.3;
let numero2 = 10.3;
let numero3 = 3.1444444444444446;

/*Transforma um número em uma string*/
console.log(`toString :${numero1.toString() + numero2.toString()}`);

/*Função que determina quantas casas decimais vão ser exibidas*/
console.log(`toFixed :${numero3.toFixed(2)}`);

/*Função que verifica se o número é inteiro ou não, True ou False*/
console.log(`Number.isInteger :${Number.isInteger(numero3)}`);

/*Verifica se o número é uma NaN, se for retorna True, senão é False*/
console.log(`Number.isNaN :${Number.isNaN(numero2 + "erro")}`);
