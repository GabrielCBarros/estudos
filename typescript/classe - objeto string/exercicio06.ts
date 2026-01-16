//6. Informe seu nome e verifique a primeira posição do caractere “b”
export {};
let nome: string = "Gabriel";
let primeiraLetraNome: string = nome[0].toLowerCase();

function verificar(primeiraLetraNome: string){
    if(primeiraLetraNome === "g"){
        return "Primeira letra do nome é G"
    }
    else{
        return "Não é"
    }
}
console.log(verificar(primeiraLetraNome))