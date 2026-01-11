//16. Sabendo que um carro faz 10km/l na estrada, possui 45 litros de capacidade no tanque de combustível e faz média de 80km/h, calcule o gasto de combustível e o tempo gasto em uma viagem de 767km de Goiânia a Porto Nacional.


function calcularViagem() {
    let distancia: number = 767
    let consumo: number = 10
    let velocidade: number = 80

    let litrosGastos: number = (distancia / consumo);
    let tempoGasto: number = Math.round (distancia / velocidade);

    return "litros gastos: " + litrosGastos + " litros" +
            "| tempo gasto: " + tempoGasto + " Horas"


}
let resultadosl: string = calcularViagem();

function imprimirResultadol(resultadosl: string){
    console.log(resultadosl)
}
imprimirResultadol(resultadosl)