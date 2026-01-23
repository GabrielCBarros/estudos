//11. Obtenha as horas, os minutos e os segundos do horário “10:05:48”s
export {};
let horas: string = "10:05:48"

function obterHorasMinutosSegundos(hora: string,minutos: string,segundos: string){
    return ` Horas: ${hora}h  \n Minutos: ${minutos}m  \n Segundos: ${segundos}s`
}
let hora = horas[0] + horas[1]
let minutos = horas[4]
let segundos = horas[6] + horas[7]

let resultados: string = obterHorasMinutosSegundos(hora,minutos,segundos)

function imprimirResultado(resultados: string ){
    
    console.log(resultados)
}
imprimirResultado(resultados)


