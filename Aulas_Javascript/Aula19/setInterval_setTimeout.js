function mostrarHora(){
    let data = new Date();

    return data.toLocaleTimeString("pt-BR",{
        hour12: false
    });
}

const timer = setInterval(function(){
    console.log(mostrarHora());
},1000);

setTimeout(function(){
    clearInterval(timer);
},5000);

setTimeout(function(){
    console.log("O tempo acabou!")
}, 5000);