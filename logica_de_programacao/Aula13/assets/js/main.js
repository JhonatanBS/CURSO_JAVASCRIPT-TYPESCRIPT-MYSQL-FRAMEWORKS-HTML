//Cria uma constante para selecionar o id ou class do HTML
const form = document.querySelector("#formulario");

/*Adiciona um evento usando o formulário*/
form.addEventListener("submit",function(e){
    e.preventDefault();/*Não permite o envio  do formulário padrão do HTML*/
    
    /*Cria uma constante para selecionar os id do HTML*/
    const inputPeso = e.target.querySelector("#peso"); 
    const inputAltura = e.target.querySelector("#altura");
    
    /*Converte para números as strings*/
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){/*Se for diferente de número, retorna NaN*/
        setResultado("Peso Inválido", false);
        return;
    }

    if(!altura){/*Se for diferente de número, retorna NaN*/
        setResultado("altura Inválida", false);
        return;
    }
    /*Cria uma constante que recebe o imc*/
    const imc = getImc(peso,altura);
    /*Cria uma constante que recebe os níveis do IMC*/
    const niveImc = getNivelImc(imc);

    const msg = `Seu IMC ${imc} (${niveImc}).`;/*Mensagem*/

    setResultado(msg,true);/* Chama a função*/
});

function getNivelImc(imc){
    const nivel = ["Abaixo de peso","Peso normal","Sobrepeso",
    "Obesidade grau 1","Obesidade grau 2","Obesidade grau 3"];

    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc <= 18.5) return nivel[0];
}

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);/*Vai retornar o valor com duas casas decimais*/
}
/*Função que cria um parágrafo no HTML*/
function criaP(){
    const p = document.createElement("p");
    return p;
}

function setResultado (msg, isValid){
    /*Cria uma constante para selecionar a div com id = "resultado" do HTML*/
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";

    const p = criaP();

    if(isValid){
        p.classList.add("paragrafo-resultado");/*Chama essa classe para o paragrafo*/
    }else{
        p.classList.add("bad");/*Senão, chama essa classe*/
    }
    p.innerHTML = msg;
    resultado.appendChild(p);/*Cria o paragrafo e insere no HTML*/

}