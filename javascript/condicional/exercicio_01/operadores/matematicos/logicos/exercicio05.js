//5. Informe um número e mostre o quadrado e o cubo desse número

function quadradoCubo(quadrado, cubo){
    return [quadrado, cubo]
}
let n = 10;
let quadrado = n*n;
let cubo = n*n*n;

let resultado = quadradoCubo(quadrado, cubo);
function imprimirResultado(resultado){
    console.log(resultado)
}
imprimirResultado(resultado)

