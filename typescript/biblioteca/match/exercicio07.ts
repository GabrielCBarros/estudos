//7. Gere um número aleatório de 0 a 1, outro de 0 a 10 e outro de 5 a 8

function numeroAleatorio(){
    return Math.random()
}
let w1 = Math.random();
let w2 = Math.random()*10;
let w3 = Math.random()*3 + 5;

let resultado77: number [] = [w1,w2,w3];

function imprimirResultado(resultado77: number []){
    console.log(resultado77)
}
imprimirResultado(resultado77)