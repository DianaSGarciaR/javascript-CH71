
/** 
 * todo: Function flecha (arrow function)
 * !Importante:
 * Tienen Return implicito
 * Quere decir que si tu funcion se puede escribir en una sola lines
 * sin necesidad de llaves, no es necesario poner la palabre return
 * la expresion a la que apunte la flecha sera retornada automaticamente.
 *
 * 
 * Expresion lambda (lambda expression) 
 * 
*/
const addTwoNumbers = (a, b) => a + b;
let result = addTwoNumbers(3, 4);
console.log(`El resultado de la suma 3 + 4 es ${result}`);

/**
 * 1. falta ver una function flecha de multiples lineas
 * 2. diferencias entre funciones
 *      2.1 hoisting
 * 3. callback
 */
const evenOrOdd = (limit) => {
    let total = 0;
    for (let i = 1; i <= limit; i++) {
        if (i % 2 == 0) {
            console.log("es par");
        } else {
            console.log("es impar");
        }
        total += i
    }
    return total;
};

console.log(evenOrOdd(100));