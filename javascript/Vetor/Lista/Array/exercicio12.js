//12. Remova o 5° item da lista e mais 3 itens seguintes, e mostre lista os itens restantes e a lista com os itens removidos

let lista = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35, 29]
let listaRemovidos = []
let listaRestantes = []

function removidosRestantes(lista, listaRemovidos,listaRestantes){
    for(let i = 0; i < lista.length; i++){
        if( i >=4 && i <= 7){
             listaRemovidos.push(lista[i])
        }
        else{
             listaRestantes.push(lista[i])
        }
    }
    return {listaRemovidos, listaRestantes}
}
console.log(removidosRestantes(lista, listaRemovidos,listaRestantes))
    