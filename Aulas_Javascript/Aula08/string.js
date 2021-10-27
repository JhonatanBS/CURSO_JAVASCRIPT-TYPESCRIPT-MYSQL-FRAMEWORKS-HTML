 /*Como vimos, strings são representandas por aspas simples,duplas ou crase, 
 em volta do texto ou caracteres.*/
let string = "Porque Ele vive, posso crer no amanhã.";
console.log(string);

console.log("\nAtributos e funções para strings:\n");
/*Transforma todas as letras em maiúsculas*/
console.log(`toUpperCase: ${string.toUpperCase()}`);

/*Transforma todas as letras em minúsculas*/
console.log(`toLowerCase: ${string.toLowerCase()}`);

/*Retorna o tamanho da string*/
console.log(`length: ${string.length}`);

/*Busca e retorna o índice da string*/
console.log(`indexOf: ${string.indexOf("q")}`);

/*Busca e retorna o índice da string, do último para o ínicio*/
console.log(`lastIndexOf: ${string.lastIndexOf(".")}`);

/*Busca um caractere ou uma palavra e substitui por outra*/
console.log(`Replace: ${string.replace("Ele", "Jesus")}`);

/*Busca o caractere na posição n do vetor de caracteres*/
console.log(string.charAt(7));

/*Escolhe a posição do caractere*/
console.log(string[17]);

/*Divide uma string com o caractere escolhido*/
console.log(string.split(" "));

/*Começa a contar a string, apartir do número escolhido*/
console.log(string.slice(35));

/*Determina um ínicio e um fim na string*/
console.log(string.substring(10,30));