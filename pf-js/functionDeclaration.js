//* 1 declarar la funcion
function saludar() {
    console.log("Hola");
}

//* 2 Llamar o invocar funcion
saludar();
saludar();
saludar();

// function con parametros
function saludarConNombre(name, age) {
    console.log(`Hola ${name} mucho gusto en conecerte :D
        No sabia que tenias ${age} años`)
}

// pasar argumentos a una funcion
saludarConNombre("Diana", 28);
saludarConNombre("Cis", 25);
saludarConNombre(28, "Lia"); // ! con JS no marca error por el tipo de variable

/**
 * ! IMPORTANTE: Cuando usamor retunrn
 * !1. Temina la ejecucion de la funcion
 * !2. El valor retornado debe ser ocupado o nunca lo vamos a ver
 */
// Funcion que retorna algo
function multiplyToNumbres(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a * b; //Finaliza ejecucion
    } else {
        return "Por favor envia dos numero";//Finaliza ejecucion
    }
    console.log("Nunca me vas a ver");
}

// Aqui no voy a ver nada
multiplyToNumbres(2, 3);

// Imprimir el valor de ratorno en consola
console.log(multiplyToNumbres(4, 3));
console.log(multiplyToNumbres(8, "Diana"));
