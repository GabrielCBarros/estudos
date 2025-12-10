//8. Informe um ano e verifique o próximo ano bissexto

function proxBissexto(ano8: number){
    ano8++;

    while(!((ano8 % 4 === 0 && ano8 % 100 !== 0) || ano8 % 400 === 0)){
        ano8++
    }
    return ano8
}

let ano8: number = 2023;

let resultado888: number = proxBissexto(ano8);
function imprimirResultado(resultado888: number){
    console.log(resultado888)
}
imprimirResultado(resultado888)