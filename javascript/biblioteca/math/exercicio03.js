//3. Informe dois números e mostre o menor e o maior número

function numeroMaiorMenor(num1, num2){
    let menor = Math.min(num1,num2);
    let maior = Math.max(num1,num2);

    return [menor,maior];
}

let n1 = 10000;
let n2 = 5000;

let resultado = numeroMaiorMenor(n1, n2)
function imprimirResultado(resultado){
    console.log(resultado)
}
imprimirResultado(resultado)