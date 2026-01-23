//15. Remova os espaços vazios do início e fim da string: “ Lógica de Programação ”

let log = "Lógica de Programação"

function removerEspaçosBrancos(remover){
    return remover
}
let remover = log.replace(/\s/g, "");

let resultados =  removerEspaçosBrancos(remover);
function imprimirResultados(resultados){
    console.log(resultados)
}
imprimirResultados(resultados)