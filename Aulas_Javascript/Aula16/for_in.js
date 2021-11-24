/*
For in: Lê os índices do array ou as chaves do Object.
*/

const produtos = ["arroz", "feijão", "sal", "Açucar", "óleo"];

const animal = {
     tipo: "cachorro",
     raca: "Pitbull",
     cor: "branco",
     nome: "Rex",
     idade: 7
};

for(indice in produtos){
     console.log(produtos[indice]);
}

for(index in animal){
    console.log("\n"+index, animal[index]);
}