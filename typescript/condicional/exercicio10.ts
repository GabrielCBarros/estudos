let num1: number = 10;
let num2: number = 15;
let num3: number = 20;

function verificarNumeroMenor (num1: number , num2: number , num3: number): void {
    if (num1 < num2 && num1 < num3) {
        console.log("numero um é o menor")
    }
    else if (num2 < num1 && num2 < num3) {
        console.log("num2 é o menor número")
    }
    else {
        console.log("num3 é o menor número")
    }
}