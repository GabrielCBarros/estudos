//7. Informe seu nome completo e verifique a última posição do caractere “r”

let nome = "Gabriel Cerqueira Barros"

function verificarletra(nome){
    if(nome[23].toLowerCase() === "s"){
        return "Ultima letra do nome é S"
    }
    else{
        return "Não é S"
    }
}
let resultado = verificarletra(nome);

function imprimirResultado(resultado){
    console.log(resultado)
}
imprimirResultado(resultado)