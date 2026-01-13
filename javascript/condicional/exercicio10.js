

function verificarNumeroMenor (num1 , num2 , num3) {
    if (num1 < num2 && num1 < num3) {
        return "numero um é o menor"
    }
    else if (num2 < num1 && num2 < num3) {
        return "numero 2 é o menor número"
    }
    else {
        return "numero3 é o menor número" 
    }
}
let num1 = 30;
let num2 = 15;
let num3 = 20;

let resultados = verificarNumeroMenor (num1 , num2 , num3);

function imprimirResultado(resultados){
    console.log(resultados)
}
imprimirResultado(resultados)
