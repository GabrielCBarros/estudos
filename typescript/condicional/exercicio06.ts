let hora = 12;

function verificarHora(hora:number){
    if(hora>= 0 && hora <= 5){
        return"Madrugada"
    }
    else if (hora >= 6 && hora <= 11){
        return"manha"

    }
    else if(hora >= 12 && hora <= 17 ) {
        return"tarde"
    }
    else if (hora >= 18 && hora <=23) {
    return"noite"
    }
    else {
    return"horario invalido"
    }
}
let resultado6: string = verificarHora(hora)
function imprimirResultado6(resultado6: string){
    console.log(resultado6)
}
imprimirResultado6(resultado6)

