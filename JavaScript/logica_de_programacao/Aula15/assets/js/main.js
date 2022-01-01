/*const h1 = document.querySelector("h1");
const data = new Date();

function diaDaSemana(dia){
    let diaSemanaTexto;
 
    switch(dia){
          case 0:
              diaSemanaTexto = "Domingo";
                  break;
          case 1:
              diaSemanaTexto = "Segunda-feira";
                  break;
          case 2:
              diaSemanaTexto = "Terça-feira";
                  break;
          case 3:
              diaSemanaTexto = "Quarta-feira";
                  break;
          case 4:
              diaSemanaTexto = "Quinta-feira";
                  break;   
          case 5:
              diaSemanaTexto = "Sexta-feira";
                  break;
          case 6:
              diaSemanaTexto = "Sábado";
                  break;
          default:
              diaSemanaTexto = "Escolha um dia válido!!!";
                  break;                                                         
    }
    return diaSemanaTexto;
 }

 function EscolheMes(mes){
    let nomeMes;
 
    switch(mes){
          case 0:
              nomeMes = "Janeiro";
                  break;
          case 1:
              nomeMes = "Fevereiro";
                  break;
          case 2:
              nomeMes = "Março";
                  break;
          case 3:
              nomeMes = "Abril";
                  break;
          case 4:
              nomeMes = "Maio";
                  break;   
          case 5:
              nomeMes = "Junho";
                  break;
          case 6:
              nomeMes = "Julho";
                  break;
          case 7:
              nomeMes = "Agosto";
                  break;
          case 8:
              nomeMes = "Setembro";
                  break;
          case 9:
              nomeMes = "Outubro";
                  break;
          case 10:
              nomeMes = "Novembro";
                  break;
          case 11:
              nomeMes = "Dezembro";
                  break;      
          default:
              diaSemanaTexto = "Escolha um dia válido!!!";
                  break;                                                         
    }
    return nomeMes;
 }
 
function zero(numero){
    return numero >= 10 ? numero : `0${numero}`;
}

 function criaData(data){
     const diaSemana = data.getDay();
     const numeroMes = data.getMonth();

     const nomeDia = diaDaSemana(diaSemana);
     const nomeMes = EscolheMes(numeroMes);

     return (`${nomeDia}, ${data.getDate()} ${nomeMes} de ${data.getFullYear()}`+
     ` ${zero(data.getHours())}:${zero(data.getMinutes())}`);
 }

 h1.innerHTML = criaData(data);
*/

const h1 = document.querySelector(".container h1");
const data = new Date();
const opcoes = {
    dateStyle: "full",
    //timeStyle: "short"
}
h1.innerHTML = data.toLocaleDateString("pt-BR", opcoes);
