/**
 * Switch 
 * Es uba estructura de control condicional
 * Pero a diferencia del if no se basa en valores de verdad o falso
 * Si no que se basa en operaciones
 * ? Nos permite tener multiples opciones
 * ? y con base eb la opcion seleccionada ejecuta un bloque de codigo
 * ? tiene una respuesta por default, por si li opcion ingresada no esta en la lista.
 * ? Se divide en casos
 * ? cada caso lleva su bloque de codigo y debe llevar al finalizar
 * ? la palabra break
 * 
 * 
 * NOTA:
 * todo: Expresiones (expression): Es todo aquello que genera un valor
 * * Ejemplos: una suma, usar una variable, usar una funcion
 * * texto, numero
 * 
 * todo: Declaraciones (statement): No genera valor y por lo general son estructuras de control o bucles
 * * Ejemplos: el if, el switch, el for, et while
 * 
*/

// * EJEMPLO 
/*
let month = prompt("Escribe el mes que te gustaria ver: ");
switch (month) {
    case "Enero":
        alert("El mes de Enero es el primer mes del año.");
        break;
    case "Febrero":
        //templay y se usan las `` # (Bactics) y better comments
        alert(`El mes de ${month} es el primer mes del año.`);
        // "El mes de " + month + " es el primer mes del año."
        break;
    case "Marzo":
        alert(`El mes de ${month} es el tercer mes del año.`);
        break;
    case "Abril":
    case "Mayo":
        console.log("Ablil y Mayo.");
        break;
    default:
        alert("El mes seleccionada no aplica");
}*/

/**
 * ! ACTIVIDAD
 * 1. Crear un prompt para pedirle al usuario un pais.
 * 2. Crear un switch con una lista de 5 paises.
 * 3. Dado el pais ingresado por el usuario, devolver la capital de dicho pais.
 */
let pais = prompt(`Escribe el pais para saber si capital
    1. España
    2. Argentina
    3. Canadá
    4. Japón
    5. Sudafrica`);
switch (pais) {
    case "España":
        alert(`La capital del país ${pais} es Madrid.`);
        break;
    case "Argentina":
        alert(`La capital del país ${pais} es Buenos Aires.`);
        break;
    case "Canadá":
        alert(`La capital del país ${pais} es Ottawa.`);
        break;
    case "Japón":
        alert(`La capital del país ${pais} es Tokio.`);
        break;
    case "Sudafrica":
        alert(`La capital del país ${pais} es Pretoria.`);
        break;
    default:
        alert("El país seleccionado no está dentro de la lista establecida.");
}