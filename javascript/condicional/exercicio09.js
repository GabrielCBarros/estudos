//9. Informe 3 números e verifique qual é o maior



function informarMaior (numero1,numero2,numero3){
    if (numero1 > numero2 && numero1 > numero3){
        return "numero 1 é o maior dos tres numeros"
    }
    else if (numero2 > numero1 && numero2 > numero3){
        return "numero 2 é o maior dos tres numeros"
    }
    else {
        return "numero 3 é o maior de todos"
    }

}
let numero1 = 10;
let numero2 = 20;
let numero3 = 40;

let resultado = informarMaior (numero1,numero2,numero3);

function imprimirFunction(resultado){
    console.log(resultado)
}
imprimirFunction(resultado)