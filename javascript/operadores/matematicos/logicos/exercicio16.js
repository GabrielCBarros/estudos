//16. Sabendo que um carro faz 10km/l na estrada, possui 45 litros de capacidade no tanque de combustível e faz média de 80km/h, calcule o gasto de combustível e o tempo gasto em uma viagem de 767km de Goiânia a Porto Nacional.


function calcularViagem() {
    let distancia = 767
    let consumo = 10
    let velocidade = 80

    let litrosGastos = (distancia / consumo);
    let tempoGasto = Math.round (distancia / velocidade);

    return "litros gastos: " + litrosGastos + " litros" +
            "| tempo gasto: " + tempoGasto + " Horas"

}
let resultadosl = calcularViagem();

function imprimirResultadol(resultadosl){
    console.log(resultadosl)
}
imprimirResultadol(resultadosl)
