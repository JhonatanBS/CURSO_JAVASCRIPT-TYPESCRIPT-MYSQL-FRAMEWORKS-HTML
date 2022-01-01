/*
  Generator function:

  Função representada por um asterisco *
  yield usado para pausar e resumir uma função geradora
  next() -> avança para o próximo elemento
*/

function* geradora(){
    yield 1;
    yield 2;
    yield 3;
}

const g1 = geradora()
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());