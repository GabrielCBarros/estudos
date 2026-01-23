//2. Informe um número e faça a tabuada do 1 até esse número
export {};
let numero: number = 9;

function tabuada(numero: number){
    for(let i = 1; i <= 9; i++){
       calculo +=numero + "x" + i + "=" +  (numero*i) + "\n"
       
    }
    return calculo
}
let calculo: string = "";

let resultado: string = tabuada(numero)

function imprimirResultado(resultado: string){
    console.log(resultado)
}
imprimirResultado(resultado)