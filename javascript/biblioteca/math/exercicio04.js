//4. Informe uma lista de números e mostre o menor e o maior número

function listaMenorMaior(lista){
    let menor = Math.min(...lista);
    let maior = Math.max(...lista);

    return [menor,maior];
}
let lista = [50,35,48,49,1000,5,88];

let resultado = listaMenorMaior(lista)
function imprimirResultado(resultado){
    console.log(resultado)
}
imprimirResultado(resultado)