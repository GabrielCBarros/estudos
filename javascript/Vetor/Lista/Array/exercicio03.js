//3. Encontre a posição do primeiro número maior que 10

let lista = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35]
let numeroMaiorDez = [

]
function numeroMaior(lista){
    for(let i = 0; i < lista.length; i++){
        let numero = lista[i]
        if(numero > 10){
            numeroMaiorDez.push(numero)
            return `Primeiro numero maior que dez: ${numeroMaiorDez}`
        }
    }
}
let resultados = numeroMaior(lista);
function imprimirResultado(resultados){
    console.log(resultados)
}
imprimirResultado(resultados)