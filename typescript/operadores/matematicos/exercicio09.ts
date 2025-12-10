//9. Informe dois números e verifique se eles são iguais

function numerosIguais(a9: number,b9: number){
    if(a9 === b9){
        return "São iguais"
    }
    else{
        return "Não são iguais"
    }
}
let a9: number = 10050;
let b9: number = 10050;

let resultado9: string = numerosIguais(a9,b9)
function imprimirResultado(resultado9: string){
    console.log(resultado9)
}
imprimirResultado(resultado9)