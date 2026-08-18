/**
 * En js hay 3 formas de declarar variabla
 * ! Exite 1 forma que ya no se recomienda su uso :
 * ! var
 * Al proceso de crear una variable y darle un valor se le llama asignacion
 * 
 * A las variables que pueden ser reasignadas (pueden cambiar en un futuro el 
   valo que tiene) se declaran:
 * ? let nameVaraible = valor;
 * 
 * * El operador = se conoce como operador de asiganación 
 * 
 * Una vez creada una variable podemos usarla en otros lugares del código
 * utilizando su nombre, las variables al ser utilizadas no van entre ""
 * 
 * Las Varaibales que no pueden ser reasignadas (su valor no puede cambiar) tambien conocidas como Contantes.
 * se declaran:
 * ? conts nameVariable = valor;
 * 
 * 
 * todo NOTA: 
 * Palabras reservadas: Son palabras que utiliza el lenguaje de programacion
     y si intentamos usarlos en otros lasdos puesden generar errores.
 * 
 * 
 * todo ATAJOS:
 * [ALT] + [Flechas] = mueve una o varias lineas
 */


let nombre = "Diana"; // Tipo String
let name = "Eliot";
console.log(nombre);
console.log(name);

const birthYaer = 1998; // Tipo numero
console.log(birthYaer)

/*  Reasignando una variable (cambiando el valor que tiene) 
    Cuando reasignamos una variable (una variable ya creada)
    ! Ya no es necesario poner let
 */
nombre = "Sarai";
console.log(nombre)

/* Seccion de prueba : que oasa cuando edito una constante
    birthYaer = 1990;
*/

/**
 * * Concatenar:
 * Nos permite pegar el valor de una variable a un texto
 */
console.log("Hola soy " + nombre
    + " y estoy en gen con " + name
    + " y naci en " + birthYaer
);


