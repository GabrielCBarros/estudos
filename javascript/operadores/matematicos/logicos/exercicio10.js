//10. Informe dois números e verifique se eles são diferentes

function numerosDiferentes(a,b){
    if(a !== b){
        return "São números diferentes"
    }
    else{
        return"São números iguais"
    }
}
let a = 15;
let b = 10;

let resultado = numerosDiferentes(a,b)

function imprimirResultado(resultado){
    console.log(resultado)
}
imprimirResultado(resultado)