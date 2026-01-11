//7. Informe dois números e verifique se o primeiro número é maior, menor ou igual ao segundo número
let numero1 = 50;
let numero2 = 20;

function verificarNumero(numero1, numero2){
    if (numero1 < numero2){
        console.log("numero 1 menor que numero 2")
    }
    else if (numero1 > numero2) {
        console.log("numero 1 maior que numero 2")
    }
    else {
        console.log("sao numeros iguais")
    }

}
let resultado = verificarNumero(numero1, numero2)
function imprimirResultado(resultado){
    console.log(resultado)
}
imprimirResultado(resultado)