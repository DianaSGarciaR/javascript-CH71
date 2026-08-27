/**
 * For loop
 * Estructura de datos Array
 * Estructuras de datos
 * Que son? y por que son importantes?
 * Son estructuras que nos ayudan a agrupar y/o ordernar datos
 * Para minipular estos datos de manera mas eficiente
 * Datos no representa nada por si lo
 * Datos juntos y dandoles contexto se vuelve informacion
 * 
 * * Array
 * Es una estructura de datos ordenada
 * !Importante
 * Los datos se identifican por un indice, el indice empieza a contar desde @
 * El tamano real se cuenta desde el 1
 * 
 * !Importante pero particular de js
 * Podemos guardar cualquier tipo de dato dentro del array, incluso
 * ombinaciones
 * Tienen tamaño dinamico
 * 
 *       [ a | b | c | d ]
 * index:  0   1   2   3
 * size: 4
 */



/* Definicion de un array */
const arrayVacio = [];
const arrayContenido = ["Diana", 28, true];
const months = ["Jan", "March", "April", "June"];
/** Obtencion de un elemento guardado en un array notacion corchete */

console.log(arrayContenido[1]);
console.log(arrayContenido[0]);
console.log(arrayContenido[3]);

/**
 * ? INGRESAR DATOS AL ARRAY
 * * Metodos
 * 1. Unishift para ingresar elementos al comienzo del array
 * 2. Push para ingresar elementos al final del array
 */
console.log("==== Agregar al principio .unshift() ====");
console.log("Array antes: ", arrayContenido);

arrayContenido.unshift("Sarai");

console.log("Array despues: ", arrayContenido);

console.log("==== Agrega al final .push() ====");
console.log("Array antes: ", arrayContenido);

arrayContenido.push("Lia", false);

console.log("Array despues: ", arrayContenido);

/**
* ? ELIMINAR DATOS
* 1. Shift elimina y devuelve el elemento en la posicion @
* 2. Pop elimina y devuelve el ultimo elemento del array
* todo: Nota:
* Lo que va dentro de los parentesis () de un metodo o funcion
* se conoce como argumento
*
 */

console.log("==== Elimina al principio .shift() ====");
console.log("Array antes: ", arrayContenido);
// arrayContenido.shift();
//? Este metodo tambien retorna el dato eliminada. Es decir retorna y elimina.
console.log(`Elemento eliminado ${arrayContenido.shift()}`);
console.log("Array despues: ", arrayContenido);

console.log("==== Elimina al final .pop() ====");
console.log("Array antes: ", arrayContenido);
// arrayContenido.pop();
console.log(`Elemento eliminado ${arrayContenido.pop()}`);
console.log("Array despues: ", arrayContenido);


/**
 * ? REASIGNAR EL VALOR DE UN INDICE
 */

// Guardamos antes un respaldo 
let valorAnterior0 = arrayContenido[0];
let valorAnterior2 = arrayContenido[2];

console.log("====  REASIGNAR EL VALOR DE UN INDICE ====");
console.log("Array antes ", arrayContenido);

arrayContenido[0] = "Cristian";
arrayContenido[2] = "Eliot";

console.log("Los valores anteriores son [0]", valorAnterior0, " y [2]", valorAnterior2)
console.log(`El resultado de la reasignacion de un elemento ${arrayContenido}`);
console.log(arrayContenido);

/**
 * ? ELINAR Y AGREGAR CON .splice()
 * Splice tiene 3 partes que van dentro de los parentesis
 * * .splice(1,2,3)
 * * 1. Indica la posicion donde va a iniciar a eleminar o a agregar
 * * 2. Cuantos elementos vas a eliminar
 * * 3. Son elementos a agregar
 */
console.log("==== USANDO .splice(indice, rango) ELIMINAR ====");
console.log("Array antes: ", arrayContenido);
arrayContenido.splice(1, 1);
console.log("Despues .splice(1, 1): ", arrayContenido);
arrayContenido.splice(1, 2);
console.log("Despues .splice(1, 2): ", arrayContenido);

console.log("==== USANDO Splice AGREGAR ====");
console.log("Array antes: ", months);

months.splice(3, 0, "Mar");
console.log("Array despues: ", months);

months.splice(2, 0, "February");
console.log("Array despues: ", months);
