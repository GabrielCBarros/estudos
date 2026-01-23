//13. Informe seu nome e extraia os caracteres “br” do seu nome

let nome = "Gabriel"

function extrairCaractere(){
    let extrair = nome[2] + nome[3]
    return extrair
}

let resultados = extrairCaractere();
function imprimirResultados(resultados){
    console.log(resultados)
}
imprimirResultados(resultados)