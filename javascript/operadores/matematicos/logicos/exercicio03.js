// 3. Informe um número e verifique se ele é par ou ímpar

function parImpar(){
    if(r % 2 === 0 ){
        return "É um número par"
    }
    else{
        return "É impar"
    }
}

let r = 11;
let resultado = parImpar()

function imprimirResultado(resultado){
    console.log(resultado)
}
imprimirResultado(resultado)