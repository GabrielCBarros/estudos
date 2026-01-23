//3. Informe dois números (o primeiro menor e o segundo maior) e imprima os valores do primeiro ao segundo. Por exemplo, se informar os números 3 e 6, deve imprimir: “3, 4, 5, 6”
export {};
let numeroMenor: number = 30;
let numeroMaior: number = 200;

function maiorAoMenor(numeroMaior: number, numeroMenor: number){
    

    for(let i = numeroMenor; i <= numeroMaior; i++ ){
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