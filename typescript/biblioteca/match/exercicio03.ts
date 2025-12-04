//3. Informe dois números e mostre o menor e o maior número

function numeroMaiorMenor(num1: number, num2: number){
    let menor = Math.min(num1,num2);
    let maior = Math.max(num1,num2);

    return [menor,maior];
}

let n1 = 10000;
let n2 = 5000;

let resultado3: number[] = numeroMaiorMenor(n1, n2)
function imprimirResultado(resultado3: number[]){
    console.log(resultado3)
}
imprimirResultado(resultado3)