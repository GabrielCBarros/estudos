//7. Verifique o tamanho da lista
export {};
let lista: number [] = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35, 29]


function tamanhoLista(lista: number []){
    let tamanho = lista.length
    
    return tamanho
}
let resultados: any = tamanhoLista(lista)

function imprimirResultados(resultados: any){
    console.log(resultados)
}
imprimirResultados(resultados)
