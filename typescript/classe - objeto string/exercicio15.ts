//15. Remova os espaços vazios do início e fim da string: “ Lógica de Programação ”
export {};
let log: string = "Lógica de Programação"

function removerEspaçosBrancos(remover: string){
    return remover
}
let remover = log.replace(/\s/g, "");

let resultados: string =  removerEspaçosBrancos(remover);
function imprimirResultados(resultados: string){
    console.log(resultados)
}
imprimirResultados(resultados)