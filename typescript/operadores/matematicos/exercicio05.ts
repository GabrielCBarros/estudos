//5. Informe um número e mostre o quadrado e o cubo desse número

function quadradoCubo(quadrado: number, cubo: number){
    return [quadrado, cubo]
}
let n5: number = 10;
let quadrado = n5*n5;
let cubo = n5*n5*n5;

let resultado55: number[] = quadradoCubo(quadrado, cubo);
function imprimirResultado(resultado55: number[]){
    console.log(resultado55)
}
imprimirResultado(resultado55)
