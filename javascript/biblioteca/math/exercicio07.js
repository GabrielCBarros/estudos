//7. Gere um número aleatório de 0 a 1, outro de 0 a 10 e outro de 5 a 8
// math.random()* (max-min) + min

function numeroAleatorio(){
    return Math.random()
}
let w1 = Math.random();
let w2 = Math.random()*10;
let w3 = Math.random()*3 + 5; // 0 ate 3

let resultado = [w1,w2,w3];

function imprimirResultado(resultado){
    console.log(resultado)
}
imprimirResultado(resultado)