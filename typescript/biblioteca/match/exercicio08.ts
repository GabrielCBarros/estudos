//8. Informe um número e verifique se ele é inteiro ou decimal
//Number.isInteger(n): verificar se numero é inteiro

function inteiroDecimal(n: number): string{
  if(Number.isInteger(n)){
        return "é um numero inteiro"
    }
    else{
        return "é um numero decimal"
    }

}   let n = 7.88;
    let resultado88: string = inteiroDecimal(n);
    function imprimirResultados88(resultado88: string): void{
        console.log(resultado88)
    }
    imprimirResultados88(resultado88)