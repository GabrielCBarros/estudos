//14. Informe o preço da gasolina e o preço do álcool, e verifique se compensa abastecer com álcool, gasolina ou tanto faz

let precoGasolina = 1;
let precoAlcool = 2;

function custoBeneficio(){
    if(precoGasolina < precoAlcool){
        return "Compensa abastecer gasolina"
    }
    else if(precoAlcool < precoGasolina){
        return "compensa abastecer alcool"
    }
    else{
        return "Abastecer com a de sua preferencia"
    }
}
let resultado = custoBeneficio();

function imprimirResultado(resultado){
    console.log(resultado)
}
imprimirResultado(resultado)