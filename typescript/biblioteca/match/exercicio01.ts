
function arredondarParaBaixo(n: number){
    return Math.floor(n);
}

let nu1: number = 2.555;
let nu2: number = 2.888;
let nu3: number = 7.888;

let re1 = arredondarParaBaixo(nu1);
let re2 = arredondarParaBaixo(nu2);
let re3 = arredondarParaBaixo(nu3);

let resultado1: number[] = [r1,r2,r3];

function imprimirResultado(resultado1: number[]){
    console.log(resultado1)
}

imprimirResultado(resultado1)