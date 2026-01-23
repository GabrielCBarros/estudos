//14. Informe seu nome e obtenha seu nome tudo em minúsculo e tudo em maiúsculo
//toUpperCase() = serve para deixar tudo maiusculo 
//toLowerCase() = serve para deixar tudo minusculo 
export{};
let nome: string = "camila"

function minusMaius(maiusculo: string,minusculo: string){
    return ` Nome maiúsculo: ${maiusculo} \n Nome minúsculo: ${minusculo}`
}

let maiusculo = nome.toUpperCase()
let minusculo = nome.toLowerCase()

let resultados: string = minusMaius(maiusculo,minusculo);
function imprimirResultados(resultados: string){
    console.log(resultados)
}
imprimirResultados(resultados)