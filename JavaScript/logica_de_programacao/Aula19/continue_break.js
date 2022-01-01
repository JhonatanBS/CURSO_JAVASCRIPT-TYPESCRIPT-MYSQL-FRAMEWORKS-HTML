/*

*/
let numero = 0;
let i = 0;
do{
   numero = i;

   if(numero === 2){
       console.log(`O numero ${numero} foi pulado`);
       i++;
       continue;/*Pula para a proxima repetição*/
   }

   if(numero === 8){
       console.log(`O numero ${numero} foi encontrado, saindo...`);
       break;/*Encerra o código*/  
    }

   console.log(numero);
   i++;
}while(numero <10);