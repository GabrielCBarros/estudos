//4. Informe dois números (o primeiro maior e o segundo menor) e imprima os valores do segundo ao primeiro. Por exemplo, se informar os números 6 e 3, deve imprimir: “6, 5, 4, 3”

let numeroMaior = 250;
let numeroMenor = 200;

function maiorAoMenor(numeroMaior, numeroMenor){
    

    for(let i = numeroMaior; i >= numeroMenor; i-- ){
        calcular += i + "\n"
    }
    return calcular
}


let calcular = "";
let resultados = maiorAoMenor(numeroMaior, numeroMenor);

function imprimirResultado(resultados){
    console.log(resultados)
}
imprimirResultado(resultados)
