/* 
for of: Acessa direto os valores do array ou string
        Não acessa object, porque não são interavéis
*/
const produtos = ["arroz", "feijão", "açucar", "óleo"];

for(valor of produtos){
   console.log(valor);
}