//8. Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B e mostre se a soma é menor que C

function somarNumero(a,b,c){
    let soma = (a + b);

    if (soma < c){
        console.log("soma é menor que c")
    }
    else {
        console.log("soma é maior que c")
    }

}
let a = 10;
let b = 15;
let c = 80

let resultado =  somarNumero(a,b,c)

function imprimirResultado(resultado){
    console.log(resultado)
}
imprimirResultado(resultado)