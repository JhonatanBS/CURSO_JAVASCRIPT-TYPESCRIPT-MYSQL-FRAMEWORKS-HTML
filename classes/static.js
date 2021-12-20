/*
static: São métodos estáticos que não podem ser instanciados, somente usando
 ou chamando a própria  classe para chama-los.
*/

class Calculo{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static soma(num1, num2){
        return num1 + num2;
    }

    static multiplicacao(num1,num2){
        return this.soma(15,20) * num1 + num2;
    }
}

const c1 = new Calculo(10, 15);
console.log(Calculo.multiplicacao(20,30));