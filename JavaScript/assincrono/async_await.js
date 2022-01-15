/*
async: Torna uma função assíncrona retorna uma promise.
await: Pausa qualquer função ou variável até anterior se resolvida.
*/

function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        if(typeof msg !== "string"){
           reject("Caí no Erro");
           return;
        }

          resolve(msg.toUpperCase() + "- Passei na promise");
          return;
      },tempo);
    });


};

async function executa(){
    try{
    const fase1 = await esperaAi("Fase 1", rand());
    console.log(fase1);

    const fase2 = await esperaAi("Fase 2", rand());
    console.log(fase2);

    const fase3 = await esperaAi(25, rand());
    console.log(fase3);

    console.log("Terminando a Promise:", fase3);
    }
    catch(e){
        console.log(e);
    }
}

executa();