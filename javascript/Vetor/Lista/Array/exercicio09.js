//9. Remova o número que está na última posição

let lista = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35, 29]

function removerNumero(lista){
    lista.length = lista.length - 1
    
    return lista
}
let resultados = removerNumero(lista)
function imprimirResultados(resultados){
    console.log(resultados)
}
imprimirResultados(resultados)

