//4. Verifique se nessa lista existe algum número múltiplo 6
export {};
let lista: number[] = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35]
let multiploSeis: number[] = []

function numeroMultiplo(lista: number[],multiploSeis: number[]){
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
let resultados: string = numeroMultiplo(lista,multiploSeis)

function imprimirResultados(resultados: string){
    console.log(resultados)
}
imprimirResultados(resultados)