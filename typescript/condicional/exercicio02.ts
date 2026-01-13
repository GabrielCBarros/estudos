export {};
let idade: number = 14 
function verificarFaixaEtaria(idade: number):string{
    if (idade <= 2){
    return "Você é um bebê"
} else if (idade >= 12) {
    return "Você é uma criança"
} else if (idade >= 18) {
    return "Você é um adolescente"
} else if (idade >= 65) {
    return "Você é um adulto"
} else {
    return "Você é um idoso"
}
}
let resultado = verificarFaixaEtaria(idade)

function imprimirResultado(resultado:string):void {
    console.log(resultado) 
}
imprimirResultado(resultado)