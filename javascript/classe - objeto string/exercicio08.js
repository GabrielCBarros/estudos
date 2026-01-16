//8. Verifique quantas letras seu nome completo tem
//replace(/\s/g, "") = Tira os espaços para depois usar o length e contar somente as letras.

let nome = "Gabriel Cerqueira Barros";
let totalLetras = nome.replace(/\s/g, "").length;

console.log(totalLetras)