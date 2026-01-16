//6. Informe seu nome e verifique a primeira posição do caractere “b”

let nome = "Gabriel";
let primeiraLetraNome = nome[0].toLowerCase();

function verificar(primeiraLetraNome){
    if(primeiraLetraNome === "g"){
        return "Primeira letra do nome é G"
    }
    else{
        return "Não é"
    }
}
console.log(verificar(primeiraLetraNome))