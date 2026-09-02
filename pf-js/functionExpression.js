// * function  expression
const getTriangleArea = function (base, height) {
    return ((base * height) / 2);
}

let area = getTriangleArea(20, 24);
console.log(`El area de un triángulo con base 20cm y altura 24cm es: ${area}`);

/**
 * ? EJERCICIO
 * Function que solicite un numero.
 * Ese numero representa el limite de una serie.
 * Mostrar que numeros son pares o impares en una serie de 1 hasta el numero ingresado.
 * Que sea una function expression.
 */
let array = [];
const getParOImpar = function (limite) {
    if (limite != null && typeof limite == "number") {
        for (let i = 1; i <= limite; i++) {
            if (i % 2 == 0) {
                array.push(`${i} es par`);
            } else {
                array.push(`${i} es impar`);
            }
        }
        return array;
    } else {
        return "Por favor ingresa un numero valido";
    }
}
// Cuando se usar el operador + antes de prompt, se convierte el valor ingresado en un numero.
let numLimite = +prompt("Ingrese un numero limite para la serie: ");
console.log(getParOImpar(numLimite));
