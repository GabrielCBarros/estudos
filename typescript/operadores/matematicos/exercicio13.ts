// 13. Informe um valor de um produto e a forma de pagamento, e calcule o valor do desconto/juros
// a. 15% de desconto: “À vista em Dinheiro” ou “PIX”
// b. 10% de desconto: “À vista no Cartão de Crédito”
// c. Preço normal: “Parcelado 2x no Cartão de Crédito”
// d. 10% de juros: “Parcelado em 3x ou mais no Cartão de Crédito”

let formaPagamento2: string = "Parcelado em 3x ou mais no Cartão de Crédito" 
let valorProduto: number = 200
let valorDesconto: number;
let valorJuros: number;

function calcular(){
    if (formaPagamento2 === "pix" || formaPagamento2 === "À vista em Dinheiro"){
        valorDesconto = valorProduto * 0.15
        return `Produto no valor de R$${valorProduto}, desconto será de R$${valorDesconto}.`
    }
    else if(formaPagamento2 === "À vista no Cartão de Crédito"){
        valorDesconto = valorProduto * 0.10
        return `Produto no valor de R$${valorProduto}, desconto será de R$${valorDesconto}.`
    }
    else if(formaPagamento2 === "Parcelado 2x no Cartão de Crédito"){
        
        return `Produto no valor de R$${valorProduto}, se for parcelado em 2x no cartão de crédito.`
    }
    else if (formaPagamento2 === "Parcelado em 3x ou mais no Cartão de Crédito"){
        valorJuros = valorProduto * 0.10
        return `Produto no valor de R$${valorProduto}, juros será de R$${valorJuros}.`
    }
}

let resultadots: any = calcular();

function imprimirResultado(resultadots: any){
    console.log(resultadots)
}
imprimirResultado(resultadots)