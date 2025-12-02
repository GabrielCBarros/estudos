// 14. Informe dois números (“numA” e “numB”), e se o “numA” for maior que “numB”, inverta-os de modo que o “numA” seja menor que o “numB”

let numA: number = 10;
let numB: number = 20;
let temp: number;

function inverter(numA: number, numB: number): string {
    if (numA > numB) {
        let temp = numA;
        numA = numB;
        numB = temp;

        return `Invertidos: numA = ${numA}, numB = ${numB}`;
    } else {
        return `Não foi preciso inverter: numA = ${numA}, numB = ${numB}`;
    }
}
let resultado14 = inverter(numA, numB);

function imprimirResultado(resultado: string): void {
    
    console.log(resultado);

}
imprimirResultado(resultado);
