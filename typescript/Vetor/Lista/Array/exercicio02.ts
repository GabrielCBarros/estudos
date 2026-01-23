//2. Encontre o número múltiplo de 7

//2. Encontre o número múltiplo de 7
export {};
let lista: number [] = [8, 2, 9, 10, 11, 5, 4, 20, 4, 34]
let listaMultiploSete: number [] = [];

function multiploSete(lista: number [],listaMultiploSete: number []){
    
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
let resultados: string = multiploSete(lista,listaMultiploSete)
function imprimirResultados(resultados: string){
    console.log(resultados)
}
imprimirResultados(resultados)