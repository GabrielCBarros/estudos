// //12. Informe uma dessas frameworks/linguagens (ReactJS, Angular, VueJS, NextJS, NodeJS, NestJS, ExpressJS, Java, PHP, Python, C, C++, C#) e imprima se ela é de backend ou frontend
// //a. Frontend: ReackJS, Angular, VueJS, NextJS
// b. Backend: NestJS, ExpressJS, Java, PHP, Python, C, C++, C#
// let tecnologia = react

let tecnologia = "ReactJS";

function verificarTecnologia(){
    if (tecnologia === "ReactJS" ||
        tecnologia === "Angular" ||
        tecnologia === "VueJS" ||
        tecnologia === "NextJS")
           {
        console.log("Se for esse combo é Frontend");

    }
    else if (tecnologia === "NextJS" || 
            tecnologia === "ExpressJS" ||
            tecnologia === "Java" || 
            tecnologia === "PHP" ||
            tecnologia === "Python" ||
            tecnologia === "C" ||
            tecnologia === "C++" ||
            tecnologia === "C#" ){

        console.log("Se for esse combo é backend")

    }
    else {
        console.log("tecnologia não entrada")
    }
}
verificarTecnologia()