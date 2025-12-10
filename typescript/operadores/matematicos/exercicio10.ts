//10. Informe dois números e verifique se eles são diferentes

function numerosDiferentes(a10: number,b10: number){
    if(a10 !== b10){
        return "São números diferentes"
    }
    else{
        return"São números iguais"
    }
}
let a10 = 20;
let b10 = 20;

let resultado10: string = numerosDiferentes(a10,b10)
function imprimirResultado(resultado10: string){
    console.log(resultado10)
}
imprimirResultado(resultado10)