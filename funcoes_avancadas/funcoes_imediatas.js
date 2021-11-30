/*IIFE -> Immediately invoked function expression
Uma função anônima envolvida por parênteses e  que pode ser chamada usando (); .
*/
(function(){
   const saudacao = "Bom dia";

   function mensagem(msg){
       return saudacao + ", " + msg;
   }

   function cumprimento(){
       console.log(mensagem("tudo bem?"));
   }

   cumprimento();
})();