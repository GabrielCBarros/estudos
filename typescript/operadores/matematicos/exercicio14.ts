//14. Informe o preço da gasolina e o preço do álcool, e verifique se compensa abastecer com álcool, gasolina ou tanto faz

let precoGasolina: number = 1;
let precoAlcool: number = 2;

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
let resultadox: string = custoBeneficio();

function imprimirResultado(resultadox: string){
    console.log(resultadox)
}
imprimirResultado(resultadox)