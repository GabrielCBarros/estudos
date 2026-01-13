//9. Informe 3 números e verifique qual é o maior

export {};

function informarMaior (numero1: number,numero2: number,numero3: number){
    if (numero1 > numero2 && numero1 > numero3){
        return "numero 1 é o maior dos tres numeros"
    }
    else if (numero2 > numero1 && numero2 > numero3){
        return "numero 2 é o maior dos tres numeros"
    }
    else {
        return "numero 3 é o maior de todos"
    }

}
let numero1: number = 10;
let numero2: number = 20;
let numero3: number = 40;

let resultado: string = informarMaior (numero1,numero2,numero3);

function imprimirFunction(resultado: string){
    console.log(resultado)
}
imprimirFunction(resultado)