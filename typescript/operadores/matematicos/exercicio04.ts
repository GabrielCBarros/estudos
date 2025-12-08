// 4. Informe um número e verifique se ele é múltiplo de 3

function multiplo(m: number): string{
    if(m % 3 === 0){
        return `${m} é multiplo de 3`
    }
    else{
        return `${m} não é multiplo de 3`
    }
}
let m: number = 7;

let resultado44: string = multiplo(m)
function imprimirResultado(resultado44: string){
    console.log(resultado44)
}
imprimirResultado(resultado44)