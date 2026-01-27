export{};
let lista: number [] = [8, 2, 9, 10, 11, 5, 4, 28, 20, 4, 34, 35, 29]

function incluirQualquerPosicao(lista: number []){
    lista.splice(4,0,99)
    return lista
}
let resultados: any = incluirQualquerPosicao(lista)

function imprimirResultados(resultados: any){
    console.log(resultados)
}
imprimirResultados(resultados)

