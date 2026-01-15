//2. Informe um número aleatório de 0 a 10 e o arredonde para 0, 1 e 2 casas decimais
export {};
function arredondar(numeroAleatorio: number,numeroInteiro: number,umaCasaDecimal: number,duasCasasDecimais: number){

    

    return ` - Numero aleatório = ${numeroAleatorio} \n - Numero inteiro ${numeroInteiro} \n - Uma decimal ${umaCasaDecimal} \n - Duas casas decimais ${duasCasasDecimais}`

}
    let numeroAleatorio = Math.random() * 10;
    let numeroInteiro: number = Math.round(numeroAleatorio);
    let umaCasaDecimal = Math.round(numeroAleatorio * 10) / 10;
    let duasCasasDecimais = Math.round(numeroAleatorio * 100) / 100;

let resultados: string = arredondar(numeroAleatorio,numeroInteiro,umaCasaDecimal,duasCasasDecimais)

function imprimirResultados(resultados: string){
    console.log(resultados)
}

imprimirResultados(resultados)


