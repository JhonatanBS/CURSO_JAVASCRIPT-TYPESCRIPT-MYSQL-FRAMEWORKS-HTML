const elementos = [
   {tag: "p",  texto: "Frase 1"},
   {tag: "div",  texto: "Frase 2"},
   {tag: "footer",  texto: "Frase 3"},
   {tag: "section",  texto: "Frase 4"},
];
/*Cria uma constante e atribui a ela, a classe do section*/
const container = document.querySelector('.container');
/*Cria uma constante e cria uma div*/
const div = document.createElement("div");

/*Laço for percorre o array*/
for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];/*Cria uma variável e destrutura ela*/
    let tagCriada = document.createElement(tag);/*Cria as tags de acordo com elemento do array*/
    tagCriada.innerHTML = texto;/*Insere no HTML*/
    /*Coloca dentro da div as tags criadas e insere as mesmas no HTML*/
    div.appendChild(tagCriada);
    
}
/*Coloca dentro do section a div com as tags criadas*/
container.appendChild(div);
