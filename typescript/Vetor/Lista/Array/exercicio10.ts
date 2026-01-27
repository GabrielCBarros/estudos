//10. Inverta a lista
export{};

let lista: number [] = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35, 29]
let listaInvertida: number [] = []

function inverterLista(listaInvertida: number [],lista: number []){
for(let i = lista.length - 1; i >= 0; i--){
    
    listaInvertida.push(lista[i])
    
}
return listaInvertida
}
let resultados: any = inverterLista(listaInvertida, lista)

function imprimirResultados(resultados: any){
    console.log(resultados)
}
imprimirResultados(resultados)