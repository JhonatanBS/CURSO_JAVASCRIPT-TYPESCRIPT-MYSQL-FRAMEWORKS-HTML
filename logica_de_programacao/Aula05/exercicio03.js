/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg, tem 1.80 e altura e seu IMC
é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
const nome = "Luiz Otávio";
const sobrenome = "Miranda"
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc = peso / (altura * altura);/* peso /(altura * altura)*/
let anoNascimento = 2021 - idade;
/*Template strings, usa crase e o caractere $ e as chaves em volta da variável*/
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura`);
console.log(`e seu IMC é de ${imc}, ${nome} nasceu em ${anoNascimento}.`);