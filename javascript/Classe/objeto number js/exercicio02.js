//2. Informe um número aleatório de 0 a 10 e o arredonde para 0, 1 e 2 casas decimais

function arredondar(numeroAleatorio,numeroInteiro,umaCasaDecimal,duasCasasDecimais){

    

    return ` - Numero aleatório = ${numeroAleatorio} \n - Numero inteiro ${numeroInteiro} \n - Uma decimal ${umaCasaDecimal} \n - Duas casas decimais ${duasCasasDecimais}`

}
    let numeroAleatorio = Math.random() * 10;
    let numeroInteiro = Math.round(numeroAleatorio);
    let umaCasaDecimal = Math.round(numeroAleatorio * 10) / 10;
    let duasCasasDecimais = Math.round(numeroAleatorio * 100) / 100;

let resultados = arredondar(numeroAleatorio,numeroInteiro,umaCasaDecimal,duasCasasDecimais)

function imprimirResultados(resultados){
    console.log(resultados)
}

imprimirResultados(resultados)

