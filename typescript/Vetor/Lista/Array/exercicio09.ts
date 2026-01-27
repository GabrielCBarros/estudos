//9. Remova o número que está na última posição
export{};
let lista: number [] = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35, 29]

function removerNumero(lista: number []){
    lista.length = lista.length - 1
    
    return lista
}
let resultados: any = removerNumero(lista)
function imprimirResultados(resultados: any){
    console.log(resultados)
}
imprimirResultados(resultados)