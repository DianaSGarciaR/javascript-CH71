/**
 * Callbacks
 * Es una funcion que se pasa como argumento
 * a otra funcion, para ser ejecutada en el momento
 * que la funcion que recibe el callback lo decida
 * ? funciones ciudadanos de primera clase
 * todas las funciones son tratadas como si fueran un valor
 */

function procesarPago(nombreCliente, callback, cuenta) {
    const saldoPagar = callback(cuenta);
    console.log(`El cliente ${nombreCliente} debe pagar 
        ${saldoPagar}
        despues de impuestos`);
}

/**
 ** Opciones para la funcion de callback
 * 1. Crear ina funcion aparte y luego mandarla como argumento
 * 2. Crear una funcion anonima dentro de los parentesos de la funcion principal
 * */
function addIVA(cuenta) {
    return cuenta * 1.16;
}
procesarPago("Diana", addIVA, 2000);

//? procesar pago con funcion anonima, 2 ejemplos, uno con function y otro con arrow function
console.log("=============== CALLBACK con funcion anonima ===============");
procesarPago("Sarai", function (cuenta) {
    return cuenta * 1.20;
}, 2000);

console.log("=============== CALLBACK con arrow function ===============");
procesarPago("Cristian", (cuenta) => cuenta * 1.30, 2000);