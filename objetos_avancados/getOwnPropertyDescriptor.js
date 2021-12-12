/*
getOwnPropertyDescriptor: Mostra uma descrição do objeto.
value, writable, enumerable, configurable
*/

const cachorro = {nome: "Fred", raca: "Labrador", idade: 7};

Object.defineProperty(cachorro, "nome",{
   writable: false,
   configurable: false,
   enumerable: false,
   value: "Luna"
});

cachorro.nome = "teddy"; // Não é possível alterar o nome, por causa das propriedades do objeto
console.log(Object.getOwnPropertyDescriptor(cachorro,"nome"));