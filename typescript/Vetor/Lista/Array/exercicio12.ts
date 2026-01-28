
export{};

let lista:number []= [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35, 29]
let listaRemovidos: number [] = []
let listaRestantes: number [] = []

function removidosRestantes(lista: number [], listaRemovidos: number [],listaRestantes: number []){
    
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
    