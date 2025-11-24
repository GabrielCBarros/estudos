//**Informe a altura e o peso de uma pessoa, e calcule seu IMC e mostre a sua classificação de acordo com o seu IMC. Se a pessoa estiver no peso adequado, informar o peso mínimo e o peso máximo para continuar com o peso adequado; e se a pessoa estiver com peso menor ou maior ao adequado, calcule quantos quilogramas ela precisa ganhar/perder para ficar com o peso adequado

function calcularIMC(altura, peso) {
    let imc = peso / (altura * altura);
    let pesoMin = 18.5 * altura * altura;
    let pesoMax = 24.9 * altura * altura;

    console.log("IMC:", imc);

    if (imc < 18.5) {
        console.log("Abaixo do peso");
        console.log("Ganhar:", pesoMin - peso, "kg");
    } else if (imc > 24.9) {
        console.log("Acima do peso");
        console.log("Perder:", peso - pesoMax, "kg");
    } else {
        console.log("Peso adequado");
        console.log("Peso mínimo:", pesoMin, "kg");
        console.log("Peso máximo:", pesoMax, "kg");
    }
}




