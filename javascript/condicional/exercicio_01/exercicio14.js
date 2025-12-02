// 14. Informe dois números (“numA” e “numB”), e se o “numA” for maior que “numB”, inverta-os de modo que o “numA” seja menor que o “numB”

let numA = 10;
let numB = 20;
let temp;

function inverter(numA, numB){
    if(numA > numB){
       let temp = numA
        numA = numB
        numB = temp
        console.log("invertidos quando numA for maior que numB")
        console.log("numA", numA)
        console.log("numA", numB)

    }
    else{
        console.log("Nao foi preciso inverter")
        console.log("numA", numA)
        console.log("numA", numB)

    }
}
let resultado = inverter(numA, numB)
function imprimirResultado(resultado){
    console.log(resultado)
}
imprimirResultado(resultado)