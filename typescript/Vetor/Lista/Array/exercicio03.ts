//3. Encontre a posição do primeiro número maior que 10
export{};

let lista: number[] = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35]
let numeroMaiorDez: number[] = []
function numeroMaior(lista: number[]){
    for(let i = 0; i < lista.length; i++){
        let numero = lista[i]
        if(numero > 10){
            numeroMaiorDez.push(numero)
            return `Primeiro numero maior que dez: ${numeroMaiorDez}`
        }
    }
}
let resultados: any = numeroMaior(lista);
function imprimirResultado(resultados: any){
    console.log(resultados)
}
imprimirResultado(resultados)