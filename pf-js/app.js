/**
 * do while
 * !El bucle do while, siempre se ejecuta por lo menos una vez
 * al ejecutar primero y luego evaluar
 * Te permite tener una ejecucion garantizada
 *
 * !necesita un contador externo
 * !no debemos olvidar actualizar dicho contador
 */

let counter = 200;
do {
    console.log("Hola");
    console.log(counter);
    //operador de suma y asignacion
    counter += 1;
} while (counter <= 100);
console.log(counter);

counter = 1;

do {
    if (counter % 2 == 0) {
        console.log(`El numero ${counter} es par`);
    } else {
        console.log(`El numero ${counter} es impar`);
    }
    counter++;
} while (counter < 200);