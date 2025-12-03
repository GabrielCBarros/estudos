
function executar(){
    let num1: number = 2.111;
    let num2: number = 2.555;
    let num3: number = 2.888;

    function arredondarParaBaixo(n: number){
        return Math.floor(n);
    }
    let r1 = arredondarParaBaixo(num1);
    let r2 = arredondarParaBaixo(num2);
    let r3 = arredondarParaBaixo(num3);

        return [r1, r2, r3]
}
let resultado1: number[] = executar()
function imprimirResultado(resultado1: number[]){

    console.log(resultado1)
}
imprimirResultado(resultado1)