function arredondarParaCima2(n: number){   //aqui eta criando uma funçao cujo o objetivo é criar um calculo para arredondar o valor
    return Math.ceil(n); // usamos esse comando para retornar o valor arredondado
}

// Abaixo da funçao declaramos tres variaveis que no caso sao as que terao as auteraçoes, por isso variaveis
let x:number = 5.111;
let y:number = 2.555;
let z:number = 4.555;

//aqui criamos mais tres variaveis chamando a funçao cujo o objetivo mostrar o valor arredonado
let r1 = arredondarParaCima2(x);
let r2 = arredondarParaCima2(y);
let r3 = arredondarParaCima2(z);

//aqui declaramos mais uma variavel com nome resultado, essa vai pegar os tres resultados e colocar em forma de lista e encaixar essa lista dentro do parametro da função, no qual dara o resultado.
let resultado2: number[] = [r1, r2, r3];

function imprimirResultado(resultado2: number[]){
    console.log(resultado2);
}

imprimirResultado(resultado2);