function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError("Esperando instancia erro");
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString("pt-BR",{
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    })
}

try{/*Vai ser executado caso não exista erro*/
    const data = new Date("05-05-1995 21:35:05");
    const hora = retornaHora(data);
    console.log(hora);
}catch(e){
    /*Quando existir um erro, será executado*/
   console.log(e);
}finally{
     /*Finally sempre é executado*/
     console.log("Tenha um bom dia!");
}
