/*
if      -> SE       -> Se a função estiver dentro das condições, será executada.
else    -> SENÃO    -> Senão estiver dentro das condições do if, será executada o else.
else if -> SENÃO SE -> Faz uma nova verificação se a função estiver dentro das condições.
*/

const hora = 15;

if(hora >= 0 && hora <12){
    console.log("Bom dia!");
}else if(hora >=12 && hora <18){
    console.log("Boa tarde!");
}else if(hora >=18 && hora <=23){
    console.log("Boa noite!");
}

const despertador = false;

if(despertador){
    console.log("Hora de trabalhar!");
}else{
    console.log("Não despertou!")
}