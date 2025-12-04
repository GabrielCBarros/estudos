//4. Informe uma lista de números e mostre o menor e o maior número

function listaMenorMaior(lista: any){
    let menor = Math.min(...lista);
    let maior = Math.max(...lista);

    return [menor,maior];
}
let lista = [50,35,48,49,1000,5,88];

let resultado4: any = listaMenorMaior(lista)
function imprimirResultado(resultado4: any){
    console.log(resultado4)
}
imprimirResultado(resultado4)