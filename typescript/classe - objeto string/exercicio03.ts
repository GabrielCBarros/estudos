//3. Informe seu nome, primeiro sobrenome e segundo sobrenome separadamente e os concatene
export {};
let nome: string = "Gabriel";
let primeiroSobrenome: string = "Cerqueira";
let segundoSobrenome: string = "Barros";

let concatenar = ` - Nome: ${nome} \n - Primeiro Sobrenome: ${primeiroSobrenome} \n - Segundo Sobrenome: ${segundoSobrenome}`

let resultado: string = concatenar;

function imprimirResultado(resultado: string){
    console.log(resultado)
}
imprimirResultado(resultado)