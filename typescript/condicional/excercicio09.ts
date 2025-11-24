//9. Informe 3 números e verifique qual é o maior

let nun1: number = 10;
let nun2: number = 20;
let nun3: number = 40;

function informarMaior (nun1: number,nun2: number, nun3: number ){
    if (nun1 > nun2 && nun1 > nun3){
        console.log("numero 1 é o maior dos tres numeros")
    }
    else if (nun2 > nun1 && nun2 > nun3){
        console.log("numero 2 é o maior dos tres numeros")
    }
    else {
        console.log("numero 3 é o maior de todos")
    }

}