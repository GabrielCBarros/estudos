//4. Informe seu nome e verifique se ele termina com “eL”

let nome = "Gabriel";

function verificar(UltimaLetra,penultimaLetra){
    if(penultimaLetra === "e" && UltimaLetra === "l"){
        return "As duas ultimas letras do nome é el"
    }
    else{
        return "Não é el"
    }
}

let penultimaLetra = nome[5];
let UltimaLetra = nome[6];

let resultado = verificar(UltimaLetra,penultimaLetra);

function imprimirResultado(resultado){
    console.log(resultado)
}

imprimirResultado(resultado)