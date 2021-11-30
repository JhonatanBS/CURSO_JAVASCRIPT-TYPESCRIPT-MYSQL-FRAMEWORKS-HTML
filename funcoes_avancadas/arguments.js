/*
Arguments se comporta como um array, mas não é um array.
Não é possível usar push ou pop nele, somente o length.
Só pode ser usado em function e expression function, menos no arrow function.
*/
function numero(){
     for(let i = 0; i < arguments.length;i++)
         console.log(arguments[i]);
}

numero(10,30,55,60);