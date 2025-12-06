//8. Informe um número e verifique se ele é inteiro ou decimal
//Number.isInteger(n): verificar se numero é inteiro

function inteiroDecimal(n){
  if(Number.isInteger(n)){
        console.log("é um numero inteiro")
    }
    else{
        console.log("é um numero decimal")
    }

}   let n = 8.99;
    let resultado = inteiroDecimal(n);
    function imprimirResultados(resultado){
        console.log(resultado)
    }
    imprimirResultados(resultado)