const numeros = [42, 7, 91, 18, 63, 25, 84, 3, 56, 71, 12, 97, 34, 68, 9, 45, 77, 21, 60, 5, 88, 31, 14, 73, 49, 2, 95, 38, 66, 27, 81, 10, 54, 92, 16, 69, 33, 76, 24, 58, 1, 87, 40, 65, 19, 99, 52, 29, 74, 6, 83, 35, 11, 57, 90, 23, 47, 79, 4, 61, 98, 26, 70, 13, 85, 32, 55, 8, 93, 41, 64, 17, 72, 28, 50, 96, 20, 67, 36, 82, 15, 59, 94, 30, 75, 22, 48, 86, 39, 62, 100, 44, 78, 53, 89, 37, 51, 80, 43, 46, 132, 107, 191, 118, 163, 125, 184, 103, 156, 171, 112, 197, 134, 168, 109, 145, 177, 121, 160, 105, 188, 131, 114, 173, 149, 102, 195, 138, 166, 127, 181, 110, 154, 192, 116, 169, 133, 176, 124, 158, 101, 187, 140, 165, 119, 199, 152, 129, 174, 106, 183, 135, 111, 157, 190, 123, 147, 179, 104, 161, 198, 126, 170, 113, 185, 130, 155, 108, 193, 141, 164, 117, 172, 128, 150, 196, 120, 167, 136, 182, 115, 159, 194, 122, 175, 142, 148, 186, 139, 162, 200, 144, 178, 153, 189, 137, 151, 180, 143, 146];

//? for of
for (const numero of numeros) {
    console.log(`El numero es: ${numero}`);
}

//? foreach es un metodo de los arrays que recibe como argumento una funcion de callback, la cual se ejecuta por cada elemento del array 
numeros.forEach((numero, index, array) => {
    console.log(`El numero ${numero} con index ${index} mas dos es ${numero + 2}`);
    console.log(`El array original es ${array}`);
});

/**
 * ? map ejecuta una funcion sobre cada elemto de un array
 * ? y devuelve un nuevo array con los resultados 
*/
function mutiplyBy3(numero) {
    return numero * 3;
}

const numXTres = numeros.map(mutiplyBy3);
console.log(numXTres);

const numXCuatro = numeros.map((numero) => numero * 4);
console.log(numXCuatro);

/**
 * ? Filter: sirve para filtrar elementos de un array
 * recibe una funcion de callback donde lo que retornemos debe ser una expresion
 * boolean, y los elementos del array que cumplan esta condicion seran guardados
 * en un nuevo array
 */

const pares = numeros.filter(function (numero) {
    return numero % 2 == 0;
});
console.log(`========== PARES ==========`);
console.log(pares);

//const multiplosDeTres = numeros.filter((numero) => numero % 3 == 0);
const multiplosDeTres = numeros.filter(function (numero) {
    return numero % 3 == 0;
});

console.log(`========== MULTIPLOS DE 3 ==========`);
console.log(multiplosDeTres);


/**
 * * EJERCICIO
 * 1. agregar iva a cada elemento del array de numeros
 * 2. usando map - pero con una function externa
 */

function iva(numero) {
    return numero * 1.16;
}

const numerosIva = numeros.map(iva);
console.log(`========== NUMEROS CON IVA ==========`);
console.log(numerosIva);
