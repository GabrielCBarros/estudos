let formaPagamento: string = "pix";
let preco: number = 300;


function calcular(formaPagamento: string, preco: number): string{
    let valor: number;
    
    if(formaPagamento === "pix" || formaPagamento === "À vista em Dinheiro" ){
        valor = preco * 0.15;
        return "desconto de R$:" + valor
    }
    else if(formaPagamento === "À vista no Cartão de Crédito"){
        valor = preco * 0.10;
        return "Desconto de R$:" + valor
    }
    else if(formaPagamento === "Parcelado 2x no Cartão de Crédito"){
        return "Sem desconto e sem juros"
        
    }
    else if(formaPagamento === "Parcelado em 3x ou mais no Cartão de Crédito"){
        valor = preco * 0.10;
        return "juros de R$:"+ valor
    }
    else{
        return "Forma de pagamento invalida"
    }
}
let resultado13: string = calcular(formaPagamento, preco)
function imprimirResultado13(resultado13: string){
    console.log(resultado13)
}
imprimirResultado13(resultado13)
