//4. Verifique se nessa lista existe algum número múltiplo 6

let lista = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35]
let multiploSeis = []

function numeroMultiplo(lista,multiploSeis){
    for(let i = 0; i < lista.length; i++){
        let numero = lista[i]

        if(numero % 6 === 0){
            multiploSeis.push(numero)
        }
    }
    if(multiploSeis.length === 0 ){
        return "Não nem nenhum numero multiplo de 6 nessa lista"
    }
    return `Numeros multiplos de 6: ${multiploSeis}`

}
let resultados = numeroMultiplo(lista,multiploSeis)

function imprimirResultados(resultados){
    console.log(resultados)
}
imprimirResultados(resultados)