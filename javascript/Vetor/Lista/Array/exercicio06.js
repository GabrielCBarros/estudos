//6. Encontre a última posição do número 4

let lista = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35, 29]
//let ultima = [lista.length - 1];
let posicao = []
function ultimaPosicao(lista, posicao){
    for(let i = 0; i < lista.length; i++){
        let numero = lista[i]
        if(numero === 4){
            posicao.push(i)
        }
    }
    return `Ultima posição do numero 4 na lista: Posição ${posicao[posicao.length - 1]}.`
    
}



let resultados = ultimaPosicao(lista, posicao)

function imprimirResultados(resultados){
    console.log(resultados)
}
imprimirResultados(resultados)

