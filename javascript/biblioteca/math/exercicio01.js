function arredondarParaBaixo(n){
    return Math.floor(n);
}

let num1 = 2.555;
let num2 = 2.888;
let num3 = 7.888;

let r1 = arredondarParaBaixo(num1);
let r2 = arredondarParaBaixo(num2);
let r3 = arredondarParaBaixo(num3);

let resultado = [r1,r2,r3];

function imprimirResultado(resultado){
    console.log(resultado)
}

imprimirResultado(resultado)

