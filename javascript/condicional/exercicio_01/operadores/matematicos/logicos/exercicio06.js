//6. Informe dois números e faça um número potência do outro e vice-versa

function potenciaViceVersa(potencia1, potencia2){
    return [potencia1, potencia2]
}

let a = 8;
let b = 7;

let potencia1 = a ** b;
let potencia2 = b ** a;

let resultados = potenciaViceVersa(potencia1, potencia2)
function imprimirResultados(resultados){
    console.log(resultados)
}
imprimirResultados(resultados)