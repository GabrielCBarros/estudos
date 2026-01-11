//9. Informe dois números e verifique se eles são iguais

function numerosIguais(a,b){
    if(a === b){
        return "São iguais"
    }
    else{
        return "Não são iguais"
    }
}
let a = 10050;
let b = 10051;

let resultado = numerosIguais(a,b)
function imprimirResultado(resultado){
    console.log(resultado)
}
imprimirResultado(resultado)