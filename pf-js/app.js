/**
* todo: 1 Objetos en JS (JSON)
 * Son una estructura de datos, similar diccionarios o mapas
 * ? Se organiza en pares
 * ? Llave : valor asociado
 * ? Es una estructura de datos desordenada
 * ? Aqui los datos se obtienen mediante su llave
 * ! No son los mismos objetos que los de Programacion orientada a objetos
 * ! Las llaves no se pueden repetir
 * 
 * * Curiosidades
 * Esta notacion se volvio el estandar para intercambio de informacion
 * Entre cliente y servidor en la WEB
 * JsoN (Javascript object notation)
 * 
 * * NOTA:
 * Todas las funcines retornan undefined si no tienen un return
* 
* todo: 2. DOM
* todo: 3. Manipulación de formularios
* todo: 4. Eventos
* todo: 5. Como renderizar cosas en pantalla
 */

const participante = {
    name: "Diana",
    lastName: "García",
    age: 27,
    isAlive: true,
    sayHi: function () {
        console.log("Hola dice Diana");
    },
    ch: 71
};

/**
 * * COMO ACCEDR A LOS VALORES
 * 1. Notacion punto (mas usado)
 * 2. Notacion corchete, el nombre va entre comillas como si fuere un string
 */

console.log(`El nombre de la participante es ${participante.name} ${participante.lastName}`);
console.log(`La edad de la participante es ${participante["age"]}`);

participante.sayHi();
console.log("NOTA: Todas las funcines retornan undefined si no tienen un return");
console.log(participante.sayHi());

// Como agregar un nuevo par de llave:valor
participante.favoriteAnimals = ["perro", "conejo", "gato"];
console.log(participante);

// Agregar una nueva llav
participante.direccion = {
    "calle": "15 de septiembre",
    "numero": 15,
    "colonia": "Iztapalapa",
    "ciudad": "CDMX",
    "pais": "Mexico"
};

console.log(participante);

// Como accedemos a la info de los objetos anidados o arrays anidados (objetos o arrays dentro de otro objeto u otro array)

console.log(`El primer animal favorito de ${participante.name} es ${participante.favoriteAnimals[0]}`);
console.log(`La cuidad de ${participante.name} es ${participante.direccion["ciudad"]}`)
console.log(`El pais de ${participante.name} es ${participante.direccion.pais}`);

// como modificar el valor de una llave
participante.age = 25;

// como eliminar una llave
delete participante.ch;
console.log(participante);

// como iterar sobre el objeto
for (const llave in participante) {
    console.log(`El valor de la llave ${llave} es ${participante[llave]}`);
}