// Informe a nota na matéria (0 a 10) e a frequência escolar (0 a 100) de um aluno e verifique se ele passou na matéria.
// a. Nota mínima: 7,5
// b. Frequência mínima: 80

let nota = 8.0;
let frequencia = 85;
function notaFrequencia(nota, frequencia){
if(nota>=7.5 && frequencia >= 80){
    return "Aluno passou na materia"
} else{
    return "Aluno não passou na materia"
}
}
let resultado = notaFrequencia(nota, frequencia)
function imprimirResultado(resultado) {
    console.log(resultado) 
}
imprimirResultado(resultado)




