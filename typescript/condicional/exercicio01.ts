export {};
let idade: number = 14
function verificarIdade(idade: number):string {
    if (idade >=18) {
        return "voce é maior de idade"
    } else{
        return "voce é menor de idade"
    }
}
let resultado: string = verificarIdade(idade)

function imprimirResultado(resultado: string):void {
    console.log(resultado) 
}
imprimirResultado(resultado)

//quando nao retorna nada usamos void, no caso do typescript
