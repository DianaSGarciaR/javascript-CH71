/**
 * Condiciones:
 * Serie de condicienes para que algo suceda
 * 
 * En programacion para el manejo de estas condiciones tenemos
 * ! el bloque if else
 * ? if: pregunta por una condicion, en caso de que esta condición sea
 * ? verdadera ejecuata un bloque de código, encaso de ser falso no ejecuta nada.
 * ? else: maneja la ejecucion de código en caso negativo
 * 
 * Lo que se coloca dentro del if debe ser alfo que genere 
 * * un valor True o False (tipo de dato boolean)
 * 
 * 
 * 
 */


/** 
 * *Ejercicio:
 * 1. Codigo que obtenga la edad del user
 * 2. correcto Pedir la fecha de nacimiento 
 * 3. tomar el año actual para calcular su edad
*/
const birthYear = prompt("¿Cual es tu año de nacimiento?");
console.log("birthYear " + birthYear);

let date = new Date();
console.log("Año actual " + date.getFullYear());
let edad = date.getFullYear() - Number(birthYear);

console.log("Tu edad " + edad);

/** 
 * todo: Operadores lógicos
 * Sirven para hacer operaciones cuyo resultado es Verdadero o Falso
 * ? == es el simbolo de igualdad en programacion
 * * Mayor que >
 * 2 > 1 == True
 * 1 > 2 == False
 * 0 > 0 == False
 * 
 * * Menor que <
 * 2 < 1 == False
 * 3 < 5 == True
 * 2 < 2 == False
 * 
 * * Comparador de igualdad ==
 * 2 == 2 == True
 * 3 == 1 == False
 * 
 * * Mayor o igual que >=
 * 2 >= 2 == True
 * 2 >= 1 == True
 * 2 >= 3 == False
 * 
 * * Menor o igual que <=
 * 4 <= 4 == True
 * 4 <= 5 == True
 * 7 <= 5 == False
 * 
 * * Diferente de !=
 * 5 != 4 == True
 * 5 != 5 == False
 * 99 != 100 == True
 * 
 * * Negacion (not) !
 * !Verdadero == Falso
 * !Falso == Verdadero
 * !(4 <= 4) == Falso
 *
 * AND && Es un operador que devuelve
 * ? Verdadero solo si ambos lados de la expresion son Verdadero
 * ? Si un lado es Falso todo el resultado se vuelve Falso
 * Verdadero && Verdadero == Verdadero
 * Verdadero && Falseo == Falso
 * Falso && Verdadero == Falso
 *
 * age >= 6 && age <= 12
 * age 7 == Verdadero
 * age 15 == Falso
 * age 5 == Falso
 *
 * OR || Es un operador que devuelve
 * ? Falso si ambos lados de la expresion son Falso
 * ? Si un lado de la expresion es Verdadero devuelve Verdadero
 * Verdadero || Falso == Verdadero
 * Falso || Verdadero == Verdadero
 * Falso || Falso == Falso
 *
 * age > 20 || age < 100
 *
 * age 101 == Verdadero
 * age 18 == Verdadero
 * 
 * 
 * 
 */

/**
 * Dentro de los parentesis va la condición que se va a evaluar.
 * Dentro de las llaves va el código que se va a ejecutar en caso.
 * de que la condición sea True.
            if (edad >= 18) {
                alert("Bienvenido :D Eres mayor de edad");
            } else {
                alert("Aun no puedes pasar, vuelve cuando cumplas los 18 D:")
            } 


 * ? else if
 * Nos permite evaluar mas de una condicion
 * va asociado a un if
 * 
            if (edad >= 18) {
                alert("Bienvenido :D Eres mayor de edad.");
            } else if (edad >= 6) {
                alert("Felicidades :) entraste a la primaria.");
            } else if (edad >= 1) {
                alert("Felicidades :o sigues en el kinder.");
            } else {
                alert("Aun eres un bebé o no haz nacido :3")
            }
 * 
 * 
 */

if (edad >= 18) {
    alert("Bienvenido, eres mayor de edad")
} else if (edad >= 12 && edad <= 17) {
    alert("Eres un adolescente");

} else if (edad >= 6 && edad <= 11) {
    alert("Estás en La primaria");
} else {
    alert("Aún eres muy pequenin ");
}
