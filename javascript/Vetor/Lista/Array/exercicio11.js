//11. Remova o número que está na primeira posição

let lista = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35, 29]
let remover = []

function reomver(lista, remover){
    for(let i = 1; i < lista.length; i++){
        
        remover.push(lista[i])
    }
    return remover
}
let resultados = reomver(lista, remover)
function imprimirResultados(resultados){
    console.log(resultados)
}
imprimirResultados(resultados)
