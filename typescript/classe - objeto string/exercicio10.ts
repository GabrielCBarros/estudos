//10. Informe seu nome e extraia as últimas 3 letras do seu nome
export {};
let nome: string = "Gabriel";
let ultimasTresLetras: string = nome[nome.length - 3] + 
                        nome[nome.length - 2] +
                        nome[nome.length - 1];

console.log(ultimasTresLetras)
