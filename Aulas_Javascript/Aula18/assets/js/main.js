const paragrafos = document.querySelector(".paragrafos");/*Seleciona apenas um elemento no HTML*/
const ps = paragrafos.querySelectorAll("p");/*Seleciona todos os elementos designados*/

const estilosBody = getComputedStyle(document.body);/*Acessa o CSS*/
const backgroundColorBody = estilosBody.backgroundColor;/*Constante seleciona o fundo do body*/



for(let p of ps){
    p.style.backgroundColor = backgroundColorBody;/*Acessa a cor de fundo do CSS e aplica no p*/
    p.style.color = "#FFFFFF";/*Acessa a cor da fonte e aplica*/
}