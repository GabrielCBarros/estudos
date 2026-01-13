export {};
let nota = 8.0;
let frequencia = 85;
function notaFrequencia(nota:number, frequencia:number){
if(nota>=7.5 && frequencia >= 80){
    return "Aluno passou na materia"
} else{
    return "Aluno não passou na materia"
}
}
let resultad = notaFrequencia(nota, frequencia)

function imprimirResultad(resultad:string) {
    console.log(resultad) 
}
imprimirResultado(resultad)