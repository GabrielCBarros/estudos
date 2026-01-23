//Use a lista a seguir para os exercícios: 8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35
//1. Divida essa lista em duas, com uma lista contendo os números ímpares e com outra lista contendo os números pares

let lista = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35]
let listaPares = []; 
let listaImpar = [];

function dividirLista(lista,listaPares,listaImpar){
    for(let i = 0; i < lista.length; i++){
        
        let numero = lista[i];

        if(numero % 2 === 0 ){
            listaPares.push(numero)
        }
        else{
            listaImpar.push(numero)
        }
    }
    return ` -listas pares: ${listaPares} \n -listas impar: ${listaImpar}`
}

let resultados = dividirLista(lista,listaPares,listaImpar)
function imprimirResultados(resultados){
    console.log(resultados)
}
imprimirResultados(resultados)



