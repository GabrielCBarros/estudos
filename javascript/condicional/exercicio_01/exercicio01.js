//atribuir a chamada da funçao verificar idade a uma varievael
//no final chamar uma funão para imprimir o resultado
let idade = 14
function verificarIdade(idade) {
    if (idade >=18) {
        return "voce é maior de idade"
    } else{
        return "voce é menor de idade"
    }
}
let resultado = verificarIdade(idade)

function imprimirResultado(resultado) {
    console.log(resultado) 
}
imprimirResultado(resultado)


