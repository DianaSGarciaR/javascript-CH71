/**
 * todo: DIFERENCIAS
 * Hoisting
 * Es un proceso por el cual las function declaration y las variables 
 * escritas con var, pasan a estar hasta arriba en el proceso de ejecucion.
 * Function Expression y Arrow Function no pasan por este proceso
 */

console.log("function declaration: ", addNmultiplyNumberumber(26, 6));

const addNumber = function (a, b) {
    return a + b;
}

// Function flecha
const divideNumber = (a, b) => a / b;

function multiplyNumber(a, b) {
    return a * b;
}

console.log("divideNumber: ", divideNumber(26, 6));


