/**
 * Loops
 * Son estructuras de control
 * Que nos permiten repetir n cantidad de veces un bloque de codigo {}
 *
 * ? Tenemos 3 grandes loops
 * ? While
 * ? Do While
 * ? For
 */

/**
 * While
 * Es loop que se ejecuta mientras una condicion sea verdadera
 * En cuanto esta condicion se vuelve falsa para
 * !Importante
 * ! Necesita un contador externo o una forma de parar
 * ! No olvidar actualizar el contador
 * ! Puedes Generar un bucle infinito
 */

//1. Contador
let counter = 0;

//2. Iniciamos el bucle
while (counter <= 100) {
  console.log(counter);
  counter = counter + 1;
}

counter = 1;

/**
 * % operador modulo
 * regresa el residuo de una division
 * ejemplo
 * 5 % 2 = 1
 * 6 % 2 = 0
 *
 */
while (counter < 200) {
  if (counter % 2 == 0) {
    console.log(`El numero ${counter} es par`);
  } else {
    console.log(`El numero ${counter} es impar`);
  }
  //operador de incremento suma 1 a el valor de la variable
  counter++;
}