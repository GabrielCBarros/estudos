//7. Informe um ano e verifique se ele é bissexto

function anoBissexto(ano){
    //se ano for divisivel por quatro , ou se for divisivel por 400 é um ano bissexto
    if(ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0){
        return "Ano é bissexto"
    }
    //se caso for divisivel por 100 não é um ano bissexto
    else {
        return "Ano não é bissexto"
    }
}
let ano = 2023;

let resultado = anoBissexto(ano);
function imprimirResultado(resultado){
    console.log(resultado)
}
imprimirResultado(resultado)

