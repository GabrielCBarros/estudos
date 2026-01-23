//14. Informe seu nome e obtenha seu nome tudo em minúsculo e tudo em maiúsculo
//toUpperCase() = serve para deixar tudo maiusculo 
//toLowerCase() = serve para deixar tudo minusculo 

let nome = "camila"

function minusMaius(maiusculo,minusculo){
    return ` Nome maiúsculo: ${maiusculo} \n Nome minúsculo: ${minusculo}`
}

let maiusculo = nome.toUpperCase()
let minusculo = nome.toLowerCase()

let resultados = minusMaius(maiusculo,minusculo);
function imprimirResultados(resultados){
    console.log(resultados)
}
imprimirResultados(resultados)