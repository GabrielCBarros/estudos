//2. Informe um número e faça a tabuada do 1 até esse número

let numero = 9;


function tabuada(numero){
    for(let i = 1; i <= 9; i++){
       calculo +=numero + "x" + i + "=" +  (numero*i) + "\n"
       
    }
    return calculo
}
let calculo = "";

let resultado = tabuada(numero)

function imprimirResultado(resultado){
    console.log(resultado)
}
imprimirResultado(resultado)
