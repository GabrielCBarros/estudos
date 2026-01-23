//5. Informe dois números (o primeiro pode ser maior ou menor que o segundo) e imprima os valores do primeiro número ao segundo. Por exemplo
//a. Primeiro número 3 e o segundo 6: “3, 4, 5, 6”
//b. Primeiro número 6 e o segundo 3: “6, 5, 4, 3”

export {};

let numero1 = 60;
let numero2 = 80;

function imprimirNumero(numero1: number,numero2: number){
    if(numero1 <= numero2){
        for(let i = numero1; i <= numero2; i++){
            console.log(i)
        }
    }
    else {
       for(let i = numero1; i >= numero2; i--){
            console.log(i)
    }
}
}
imprimirNumero(numero1,numero2)