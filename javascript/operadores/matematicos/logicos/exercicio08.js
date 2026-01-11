//8. Informe um ano e verifique o próximo ano bissexto

function proxBissexto(ano){
    ano++;

    while(!((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0)){
        ano++
    }
    return ano
}

let ano = 2023;

let resultado = proxBissexto(ano);
function imprimirResultado(resultado){
    console.log(resultado)
}
imprimirResultado(resultado)