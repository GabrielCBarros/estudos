//10. Inverta a lista

let lista = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35, 29]
let listaInvertida = []

function inverterLista(listaInvertida, lista){
    for(let i = lista.length - 1; i>= 0; i--){
        
        listaInvertida.push(lista[i])
    }
    return listaInvertida
}
let resultados = inverterLista(listaInvertida, lista)

function imprimirResultados(resultados){
    console.log(resultados)
}
imprimirResultados(resultados)