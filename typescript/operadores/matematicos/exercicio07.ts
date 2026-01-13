//7. Informe um ano e verifique se ele é bissexto
export {};
function anoBissexto(ano: number){
    //se ano for divisivel por quatro , ou se for divisivel por 400 é um ano bissexto
    if(ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0){
        return "Ano é bissexto"
    }
    //se caso for divisivel por 100 não é um ano bissexto
    else {
        return " Não é bissexto"
    }
}
let ano: number = 2000;

let resultado: string  = anoBissexto(ano);
function imprimirResultado(resultado: string){
    console.log(resultado)
}
imprimirResultado(resultado)