//3. Informe dois números (o primeiro menor e o segundo maior) e imprima os valores do primeiro ao segundo. Por exemplo, se informar os números 3 e 6, deve imprimir: “3, 4, 5, 6”

let numeroMenor = 30;
let numeroMaior = 200;

function maiorAoMenor(numeroMaior, numeroMenor){
    

    for(let i = numeroMenor; i <= numeroMaior; i++ ){
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

