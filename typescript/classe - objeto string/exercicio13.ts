//13. Informe seu nome e extraia os caracteres “br” do seu nome
export{};
let nome: string = "Gabriel"

function extrairCaractere(){
    let extrair = nome[2] + nome[3]
    return extrair
}

let resultados: string = extrairCaractere();
function imprimirResultados(resultados: string){
    console.log(resultados)
}
imprimirResultados(resultados)