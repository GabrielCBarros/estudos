// 3. Informe um número e verifique se ele é par ou ímpar
// a porcentagem serve para saber o resto (%)

function parImpar(){
    if(r % 2 === 0 ){
        return "É um número par"
    }
    else{
        return "É impar"
    }
}

let r: number = 11;
let resultado33: string = parImpar()

function imprimirResultado(resultado33: string){
    console.log(resultado33)
}
imprimirResultado(resultado33)