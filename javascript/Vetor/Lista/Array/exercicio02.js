//2. Encontre o número múltiplo de 7

let lista = [8, 2, 9, 10, 11, 5, 4, 20, 4, 34]
let listaMultiploSete = [];

function multiploSete(lista,listaMultiploSete){
    
    for(let i = 0; i < lista.length; i++){
        let numero = lista[i];

        if(numero % 7 === 0 ){
            listaMultiploSete.push(numero)
        }
    }
    if(listaMultiploSete.length === 0){
        return "Nenhum numero da lista é multiplo de 7"
    }
    return `Numeros multiplos de 7: ${listaMultiploSete}`

}
let resultados = multiploSete(lista,listaMultiploSete)
function imprimirResultados(resultados){
    console.log(resultados)
}
imprimirResultados(resultados)