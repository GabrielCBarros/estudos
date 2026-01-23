//12. Informe seu nome e verifique se ele começa com “gab”
export{};
let nome: string = "gabriel"

function verificarNome(tresPrimeiras: string){
    if(tresPrimeiras === "gab"){
        return "As tres primeiras letras são gab"
    }
    else{
        return "Não é"
    }

}
let tresPrimeiras = nome[0] + nome[1] + nome[2]

let resultados: string = verificarNome(tresPrimeiras)
function imprimirResultados(resultados: string){
    console.log(resultados)
}
imprimirResultados(resultados)