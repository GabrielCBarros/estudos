//17. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê: salário bruto; quanto pagou ao INSS; quanto pagou ao sindicato; e o salário líquido. Calcule os descontos e o salário líquido, conforme a tabela abaixo: SAÍDA: 
// + Salário Bruto: R$ 
// - IR (11%): R$ 
// - INSS (8%): R$ 
// - Sindicato (5%): R$ 
// ------------------------- 
// = Salário Liquido: R$
export {};
function calcularSalarioDescontos(ganhaHora: number,horasMes: number){
    let salarioBruto = ganhaHora * horasMes;
    let ir: number = (salarioBruto * 0.11)
    let inss: number = (salarioBruto * 0.08)
    let sindicato: number = (salarioBruto * 0.05)
    let salarioLiquido: number = salarioBruto - ir - inss - sindicato
    return `+ Salario bruto R$${salarioBruto} \n - IR (11%): R$${ir} \n - INSS (8%): R$${inss}\n - Sindicato (5%): R$${sindicato} \n = Salário liquido: R$${salarioLiquido}`
}

let ganhaHora = 10;
let horasMes = 200;

let resultado: string = calcularSalarioDescontos(ganhaHora,horasMes)

function imprimirResultado(resultado: string){
    console.log(resultado)
}
imprimirResultado(resultado)







