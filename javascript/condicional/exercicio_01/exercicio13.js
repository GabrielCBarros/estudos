// let formaPagamento = "PIX";
// let preco = 100; 

// let valor; 

// function calcular() {
//   if (formaPagamento === "À vista em Dinheiro" || formaPagamento === "PIX") {
//     // 15% de desconto
//     valor = preco * 0.15;
//     console.log("Desconto de R$: " + valor);

//   } else if (formaPagamento === "À vista no Cartão de Crédito") {
//     // 10% de desconto
//     valor = preco * 0.10;
//     console.log("Desconto de R$: " + valor);

//   } else if (formaPagamento === "Parcelado 2x no Cartão de Crédito") {
//     // preço normal
//     console.log("Sem desconto ou juros.");

//   } else if (formaPagamento === "Parcelado em 3x ou mais no Cartão de Crédito") {
//     // 10% de juros
//     valor = preco * 0.10;
//     console.log("Juros de R$: " + valor);

//   } else {
//     console.log("Forma de pagamento inválida.");
//   }
// }

// calcular();


let formaPagamento = "pix";
let preco = 100;
let valor;

function calcular(formaPagamento, preco, valor){
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
let resultado = calcular(formaPagamento, preco, valor)
function imprimirResultado(resultado){
    console.log(resultado)
}
imprimirResultado(resultado)

