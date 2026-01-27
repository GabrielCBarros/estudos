//8. Inclua o número 99 na última posição

// let lista = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35, 29]

// function incluirNumero(lista){
//     lista.push(99)
//     return lista
// }
// console.log(incluirNumero(lista))

//Se caso quiser colocar o 99 em uma posição especifica existe uma sintaxe usada chamada splice, confere abaixo a outra forma:

let lista = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35, 29]

function incluirQualquerPosicao(lista){
    lista.splice(4,0,99)
    return lista
}
let reultados = incluirQualquerPosicao(lista)

function imprimirResultados(resultados){
    console.log(resultados)
}
imprimirResultados(resultados)




//Também consegue fazer esse metodo usando logica pura:

// let lista = [8, 2, 9, 10, 11]
// let posicao = 2
// let valor = 99

// lista[lista.length] = undefined

// for (let i = lista.length - 1; i > posicao; i--) {
//     lista[i] = lista[i - 1]
// }
// lista[posicao] = valor

// console.log(lista)