//9. Informe 3 números e verifique qual é o maior

let numero1 = 10;
let numero2 = 20;
let numero3 = 40;

function informarMaior (){
    if (numero1 > numero2 && numero1 > numero3){
        console.log("numero 1 é o maior dos tres numeros")
    }
    else if (numero2 > numero1 && numero2 > numero3){
        console.log("numero 2 é o maior dos tres numeros")
    }
    else {
        console.log("numero 3 é o maior de todos")
    }

}