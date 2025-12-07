// 1. Informe 4 notas de uma matéria de um aluno (0 a 10). Informe o total de aulas que ele teve nessa matéria. Informe uma quantidade de faltas que esse aluno teve na matéria. Verifique se o aluno passou na matéria, ficou de recuperação ou foi reprovado.
// a. Aprovação: média mínima de 7,5 e frequência mínima de 80%;
// b. Recuperação: média mínima de 5,0 e frequência mínima de 80%;
// c. Reprovação: média menor que 5,0 ou frequência menor que 80%

function calcularMateria(media: number, frequencia1: number){

    if(media >= 7.5 && frequencia1 >= 0.8 * 100){
        return "Aprovado"
    }
    else if(media >= 5 && frequencia1 >= 0.8 * 100){
        return "Recuperação"
    }
    else{
        return "reprovação"
    }
}
let nota1 = 5.0;
let nota2 = 8.5;
let nota3 = 8.0;
let nota4 = 8.0;

let media = (nota1 + nota2 + nota3 + nota4) / 4;

let aulasTotal = 50;
let faltas = 5;
let aulasAssistidas = aulasTotal - faltas
let frequencia1: number = aulasAssistidas/aulasTotal * 100;
console.log(media,frequencia)

let resultados1: string = calcularMateria(media, frequencia)
function imprimirResultados(resultados1: string){
    console.log(resultados)
}
imprimirResultados(resultados)






