//6. Crie uma lista com os números de 1 a 5 e imprima a primeira posição
//export {};
let lista = [];

function listarPosicao(lista){
    
    for(let i = 1; i <= 5; i++){
        lista.push(i);
    }
    console.log(lista[0])
}
listarPosicao(lista)