//5. Encontre a posição do número 29

let lista = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35, 29]

function acharPosicao(lista){
    for(let i = 0; i < lista.length; i++){
        let numero = lista[i]

        if(numero === 29){
            return i
        }
    }
 
}
let resultados = acharPosicao(lista)

function imprimirResultados(resultados){
    console.log(resultados)
}
imprimirResultados(resultados)