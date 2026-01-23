//12. Informe seu nome e verifique se ele começa com “gab”

let nome = "gabriel"

function verificarNome(tresPrimeiras){
    if(tresPrimeiras === "gab"){
        return "As tres primeiras letras são gab"
    }
    else{
        return "Não é"
    }

}
let tresPrimeiras = nome[0] + nome[1] + nome[2]

let resultados = verificarNome(tresPrimeiras)
function imprimirResultados(resultados){
    console.log(resultados)
}
imprimirResultados(resultados)