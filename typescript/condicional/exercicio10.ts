export {};
function verificarNumeroMenor (num1: number , num2: number , num3: number) {
    if (num1 < num2 && num1 < num3) {
        return "numero um é o menor"
    }
    else if (num2 < num1 && num2 < num3) {
        return "numero 2 é o menor número"
    }
    else {
        return "numero 3 é o menor número" 
    }
}
let num1 = 70;
let num2 = 60;
let num3 = 40;

let resultados: string = verificarNumeroMenor (num1 , num2 , num3);

function imprimirResultado(resultados: string){
    console.log(resultados)
}
imprimirResultado(resultados)
