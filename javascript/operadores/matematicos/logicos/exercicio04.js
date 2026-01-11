// 4. Informe um número e verifique se ele é múltiplo de 3

function multiplo(m){
    if(m % 3 === 0){
        return `${m} é multiplo de 3`
    }
    else{
        return `${m} não é multiplo de 3`
    }
}
let m = 12;

let resultado = multiplo(m)
function imprimirResultado(resultado){
    console.log(resultado)
}
imprimirResultado(resultado)