/*
... rest   -> Retorna o resto
... spread -> Espalhamento
*/

const array1 = [1,2,3];
const array2 = [4,5,6];

const array3 = [...array1,...array2, ...[15,16,17]] ;// Concatenando usando o spread
console.log(array3)