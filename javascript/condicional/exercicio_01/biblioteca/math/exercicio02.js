
function executar2(){
    let num1 = 2.111;
    let num2 = 3.444;
    let num3 = 5.555;

 function arredondarParaCima2(n){
    return Math.ceil(n);
}  
    let r1 = arredondarParaCima2(num1);
    let r2 = arredondarParaCima2(num2);
    let r3 = arredondarParaCima2(num3); 

    return [r1,r2,r3]
}
let resultado = executar2()
function imprimirResultado(resultado){
 console.log(resultado)
}
imprimirResultado(resultado)
