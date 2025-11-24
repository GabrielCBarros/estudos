let tecnologia = "ReactJS"; // coloque aqui a tecnologia informada

function verificarTipo() {

    if (
        tecnologia === "ReactJS" ||
        tecnologia === "Angular" ||
        tecnologia === "VueJS" ||
        tecnologia === "NextJS"
    ) {
        console.log(tecnologia, "é de FRONTEND");
    }

    else if (
        tecnologia === "NestJS" ||
        tecnologia === "ExpressJS" ||
        tecnologia === "NodeJS" ||
        tecnologia === "Java" ||
        tecnologia === "PHP" ||
        tecnologia === "Python" ||
        tecnologia === "C" ||
        tecnologia === "C++" ||
        tecnologia === "C#"
    ) {
        console.log(tecnologia, "é de BACKEND");
    }

    else {
        console.log("Tecnologia inválida");
    }
}

verificarTipo();