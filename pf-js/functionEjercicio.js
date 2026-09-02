/**
 * 1. Crear una funcion
 * 2. No tiene parametros
 * 3. Tampoco tiene return
 * 4. Para que el usuario adivine el numero secreto
 *      4.1  Bucles y condicionales
 * 5. el usuario tiene 3 intentos
 * 6. Si el usuario ingresa el numero incorrecto darle una pista
 *      el numero es secreto es mayor o el numero secreto es menor
 * 7. Usar prompt
 * 8. Usar Math.random()
 */


adivinarNumeroSecreto()

function adivinarNumeroSecreto() {
    let intentos = 3;
    let numUser = prompt(`ADIVINA EL NUMERO SECRETO
    Tienes ${intentos} intentos.
    Ingresa un numero del 1 al 10:`);
    let numSecreto = getRandomInt(1, 10);

    console.log(`Numero secreto es: ${numSecreto}`);
    //    if (numUser != null && numUser > 0 && numUser <= 10) {
    while (intentos <= 3) {
        if (numUser == numSecreto) {
            alert(`Felicidades, adivinaste el numero secreto es: ${numSecreto}`);
            break;
        } else {
            intentos--;
            if (intentos > 0 && intentos <= 3) {
                if (numUser < numSecreto) {
                    numUser = prompt(`El numero secreto es mayor ${numUser}.
                        Solo te quedan ${intentos} intentos.
                        Intenta otra vez:`);
                } else {
                    numUser = prompt(`El numero secreto es menor ${numUser}.
                        Solo te quedan ${intentos} intentos.
                        Intenta otra vez:`);
                }
            } else {
                alert(`PERDISTE :c el numero secreto es: ${numSecreto}`);
            }

        }
    }
    //    }

}

// Notesé que también en este caso `min` será incluido y `max` excluido
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}