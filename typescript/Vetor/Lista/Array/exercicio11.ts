//11. Remova o número que está na primeira posição
export {};
let lista:number [] = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35, 29]
let remover:number [] = []

function reomver(lista:number [], remover:number []){
    for(let i = 1; i < lista.length; i++){
        
        remover.push(lista[i])
    }
    return remover
}
let resultados: any = reomver(lista, remover)
function imprimirResultados(resultados: any){
    console.log(resultados)
}
imprimirResultados(resultados)
