/**
 * todo: Ciclo while
 * Ideal para repetir un bloque de código mientras una condición sea verdadera.
 * Fácil (Validación simple): Pide al usuario que ingrese un número positivo. Si el usuario ingresa un número negativo o cero, el programa debe seguir pidiendo el número hasta que sea válido. Al final, imprime el número aceptado.
 * Media (Acumulador): Crea un programa que pida números al usuario y los vaya sumando. El ciclo debe detenerse cuando el usuario ingrese el número 0. Al terminar, muestra la suma total.
 * Difícil (Potencia manual): Solicita una base y un exponente (ambos enteros positivos). Calcula el resultado de elevar la base al exponente utilizando únicamente un ciclo while y sumas/multiplicaciones. No utilices funciones de librería como Math.pow().
 * Consejos para resolverlos
 * Inicializa tus variables: Asegúrate de que tus contadores o acumuladores (como suma = 0) empiecen con un valor definido.
 * Cuidado con los bucles infinitos: Verifica siempre que la condición de salida en el while y do-while eventualmente se vuelva falsa.
 * Identado: Mantén tu código limpio para que sea fácil ver qué instrucciones están "dentro" del bucle.
 */

/**
 * * Fácil (Validación simple): Pide al usuario que ingrese un número positivo. Si el usuario ingresa un número negativo o cero, el programa debe seguir pidiendo el número hasta que sea válido. Al final, imprime el número aceptado.
 */

let numeroPositivo = prompt("Ingresa un numero positivo: ");
let count = 0;

while (count > 0) {
    if (numeroPositivo > 0) {
        prompt(`El numero ${numeroPositivo} es posotivo.`);
        count = 0;
    } else {
        prompt(`El numero ${numeroPositivo} no se concidera posotivo. 
            Ingresa un numero positivo:`);

        count++;
    }
}

/**
 * * Media (Acumulador): Crea un programa que pida números al usuario y los vaya sumando. El ciclo debe detenerse cuando el usuario ingrese el número 0. Al terminar, muestra la suma total.
 */
let numSum = prompt(`SUMA
    Ingresa un numero que quieras sumar.
    Cuando ingreses el numero 0 se mostrara el resulado de tu suma.
    `);
let sumaResult = 0;
let bandera = 1;

while (bandera > 0) {
    if (numSum == 0) {

    } else {

    }
    sumaResult + numSum;

}

/**
 * * Difícil (Potencia manual): Solicita una base y un exponente (ambos enteros positivos). Calcula el resultado de elevar la base al exponente utilizando únicamente un ciclo while y sumas/multiplicaciones. No utilices funciones de librería como Math.pow().
 */