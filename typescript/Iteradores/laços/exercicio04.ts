//4. Informe dois números (o primeiro maior e o segundo menor) e imprima os valores do segundo ao primeiro. Por exemplo, se informar os números 6 e 3, deve imprimir: “6, 5, 4, 3”
export {};

let numeroMaior: number = 250;
let numeroMenor: number = 200;

function maiorAoMenor(numeroMaior: number, numeroMenor: number){
    

    for(let i = numeroMaior; i >= numeroMenor; i-- ){
        calcular += i + "\n"
    }
    return calcular
}


let calcular = "";
let resultados: string = maiorAoMenor(numeroMaior, numeroMenor);

function imprimirResultado(resultados: string){
    console.log(resultados)
}
imprimirResultado(resultados)
