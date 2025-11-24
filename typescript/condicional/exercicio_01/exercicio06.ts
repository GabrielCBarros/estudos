let hora: number = 12;

function verificarHora(hora: number):void{
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