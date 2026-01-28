//14. Inclua o número 99 na primeira posição

let lista = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35, 29]
let posicao = [0]
let novaLista = []
function incluirNumero(lista, novaLista){
    for(let i = 0; i < lista.length; i++){
        if(i === posicao){
            novaLista.push(valor)
            
        }
    }
    return novaLista
}
console.log(incluirNumero(lista, novaLista))