//5. Encontre a posição do número 29
export {};
let lista: number[] = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35, 29]

function acharPosicao(lista: number[]){
    for(let i = 0; i < lista.length; i++){
        let numero = lista[i]

        if(numero === 29){
            return i
        }
    }
 
}
let resultados: any = acharPosicao(lista)

function imprimirResultados(resultados: any){
    console.log(resultados)
}
imprimirResultados(resultados)

