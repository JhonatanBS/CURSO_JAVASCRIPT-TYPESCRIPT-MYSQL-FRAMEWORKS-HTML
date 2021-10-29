/*
Arrays são vetores que são sequenciais, representados por colchetes em javascript,
podendo ter qualquer tipo de dado, atributo ou função dentro dos colchetes.
*/

let nome = ["Carlos", "Maria", "Luana"];
console.log(`${nome}\n`);

/*Push: Adiciona um elemento no final do arrays*/
nome.push("Paulo");
console.log(`Adicionado no final do array, o nome "${nome.slice(-1)}" com a função push.`);
console.log(`${nome}\n`);

/*Unshift: Adiciona um elemento no ínicio do arrays*/
nome.unshift("João");
console.log(`Adicionado no ínicio do array, o nome "${nome.slice(0,1)}" com a função unshift.`);
console.log(`${nome}\n`);

/*Pop: Remove um elemento no final do arrays*/
var removido = nome.pop();
console.log(`Removido no final do array, o nome "${removido}" com a função pop.`);
console.log(`${nome}\n`);

/*shift: Remove um elemento no ínicio do arrays*/
removido = nome.shift();
console.log(`Removido no ínicio do array, o nome "${removido}" com a função shift.`);
console.log(`${nome}\n`);

/*length: Retorna o tamanho do array*/
console.log(`O tamanho do array é "${nome.length}"\n.`);

/*instanceof Array: Retorna true se a variável for um array, caso não seja, retorna false*/
console.log(nome instanceof Array);
console.log(typeof nome);