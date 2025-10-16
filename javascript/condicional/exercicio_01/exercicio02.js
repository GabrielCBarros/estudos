// //2. Informe a idade de uma pessoa, verifique a faixa etária dela e informe se ela é bebê, criança, adolescente, adulta ou idosa:
// a. Bebê: menor que 2 anos de idade (Informar: "Você é um bebê")
// b. Criança: a partir de 2 anos de idade (Informar: "Você é um bebê")
// c. Adolescente: a partir de 12 anos de idade (Informar: "Você é um adolescente")
// d. Adulto: a partir de 18 anos de idade (Informar: "Você é um adulto")
// e. Idoso: a partir de 65 anos de idade (Informar: "Você é um idoso")

let idade = 14 
function verificarFaixaEtaria(idade){
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

function imprimirResultado(resultado) {
    console.log(resultado) 
}
imprimirResultado(resultado)

