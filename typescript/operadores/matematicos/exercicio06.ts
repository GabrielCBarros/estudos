//6. Informe dois números e faça um número potência do outro e vice-versa

function potenciaViceVersa(potencia1: number, potencia2: number){
    return [potencia1, potencia2]
}

let a = 8;
let b = 7;

let potencia1 = a ** b;
let potencia2 = b ** a;

let resultados66: number[] = potenciaViceVersa(potencia1, potencia2)
function imprimirResultados(resultados66: number[]){
    console.log(resultados)
}
imprimirResultados(resultados)
