//7. Informe dois números e verifique se o primeiro número é maior, menor ou igual ao segundo número
let numero1: number = 30;
let numero2: number = 20;

function verificarNumero7(numero1: number, numero2: number){
    if (numero1 < numero2){
        return "numero 1 menor que numero 2"
    }
    else if (numero1 > numero2) {
        return "numero 1 maior que numero 2"
    }
    else {
        return "sao numeros iguais"
    }

}
let resultado7: string = verificarNumero7(numero1, numero2)
function imprimirResultado7(resultado7: string){
    console.log(resultado7)
}
imprimirResultado7(resultado7)
