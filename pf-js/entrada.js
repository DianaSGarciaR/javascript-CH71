/**
 * ! Promp:
 * 1. Hat que asignar su uso a una variable para luego poder usar el valor que
 * ingeso el usario
 * 1.2 ysar el valor inmediatamente
 * !Importante¡
 * 1. No se recomienda su uso en aplicaciones en produccion.
 * 2. Bloquea el código, esto quiere decir que el código que este debajo
     de donde escribimos el uso de prompt no se va a ejecutar, hasta que 
     el usario ingrese algo.
 * 3. No se puedo personalizar.
 * 4. Todo lo que ingresa mediante prompt siempre es un String.
 * 
 * nota
 * ? n es un caracte que nos inserta un salto de linea
 */

//const edad = prompt("ingresa tu edad: ", 18);
//const nombre = prompt("ingresa tu nombre: ", "Diana");
//console.log("Hola mi nombre es " + nombre
//    + " y este año compli " + edad + " años :D");
//
//alert("Hola mi nombre es " + nombre
//    + " y este año compli " + edad + " años :D");
//
/** Pedir un prompt para obtener una serie o pelicula favoritos */
const movie = prompt("Ingresa tu serie o pelicula favorita: ");

/** Un prompt para obtener un personaje de esa serie, el favorito */
const personaje = prompt("Ingresa tu personaje favorita de serie o pelicula: ");

/** un prompt para obtener porque es el favorito */
const why = prompt("Ingresa porque son tus favoritos: ");

/** En la serie x sale el personaje x y es mi favorito por x */
console.log("Mi serie/pelicula favorita es " + movie
    + " y sale el personade " + personaje + "."
    + "\n Es mi favorito por que " + why + "."
);
alert(
    "Mi serie/pelicula favorita es " + movie
    + " y sale el personade " + personaje + "."
    + "\n Es mi favorito por que " + why + "."
);
