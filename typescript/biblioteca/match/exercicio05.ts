//5. Faça as seguintes potenciações: 2**3, 5**2, 7**3

function potencializacao(base: number,expoente: number){
     return base ** expoente;
}
    
    let x1: number = potencializacao(2,3);
    let x2: number = potencializacao(5,2);
    let x3: number = potencializacao(7,3)
                    

let resultados5: number[] = [x1,x2,x3];                   

function imprimirResultado(resultados5: number[]){
    console.log(resultados5)
}
imprimirResultado(resultados5)
