/* Função recursiva:
  
É uma função que chama ela mesmo, que possui uma operação e um ponto de parada
*/
function fatorial(x){
    if(x === 0)
      return 1;
    if(x === 1)
      return x;
      
    return x*fatorial(x-1);  
}

console.log(fatorial(2));