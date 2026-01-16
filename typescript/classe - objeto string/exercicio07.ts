//7. Informe seu nome completo e verifique a última posição do caractere “s”

let nome = "Gabriel Cerqueira Barros"

function verificarletra(nome: string){
    if(nome[23].toLowerCase() === "s"){
        return "Ultima letra do nome é S"
    }
    else{
        return "Não é S"
    }
}
let resultado: string = verificarletra(nome);

function imprimirResultado(resultado: string){
    console.log(resultado)
}
imprimirResultado(resultado)
