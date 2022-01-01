function maior(n1, n2){
   if(n1 > n2){
         console.log(`O maior numero é o ${n1}`);
             return n1;
   }
   else if(n1 < n2){
         console.log(`O maior numero é o ${n2}`);
             return n2;
   }
   else
       console.log(`Os número são iguais`);        
}

const numero1 = 15;
const numero2 = 30;
maior(numero1,numero2);