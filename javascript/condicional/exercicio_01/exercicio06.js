// //Informe a hora (0 a 23) e verifique se é madrugada, manhã, tarde ou noite
// //a. 0-5: madrugada
// b. 6-11: manhã
// c. 12-17: tarde
// d. 18-23: noite

let hora = 12;

function verificarHora(hora){
    if(hora>= 0 && hora <= 5){
        console.log("Madrugada")
    }
    else if (hora >= 6 && hora <= 11){
        console.log("manha")

    }
    else if(hora >= 12 && hora >= 17 ) {
        console.log("tarde")
    }
    else if (hora >= 18 && hora <=23) {
    console.log("noite")
    }
    else {
    console.log("horario invalido")
    }
}