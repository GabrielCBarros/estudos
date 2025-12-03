function executar(){
    let num1 = 2.111;
    let num2 = 2.555;
    let num3 = 2.888;

    function arredondarParaBaixo(n){
        return Math.floor(n);
    }
    let r1 = arredondarParaBaixo(num1);
    let r2 = arredondarParaBaixo(num2);
    let r3 = arredondarParaBaixo(num3);

        return [r1, r2, r3]
}
let resultado = executar()
function imprimirResultado(resultado){

    console.log(resultado)
}
imprimirResultado(resultado)
