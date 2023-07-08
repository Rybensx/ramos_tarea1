// Crear variables con cada tipo de dato
// Números
let numero1 = 32;
let numero2 = 9.11;

// Cadenas de texto
let cadena1 = "Hola, soy el Tte. de Cmns. Ramos";
let cadena2 = "JavaScript";

// Booleanos
let booleano1 = true;
let booleano2 = false;

// Null
let nulo1 = null;
let nulo2 = null;

// Indefinido
let indefinido1 = undefined;
let indefinido2 = undefined;

// Objetos
let objeto1 = { nombre: "Gexar", edad: 25 };
let objeto2 = { marca: "Apple", modelo: "iPhone" };

// Arreglos
let arreglo1 = [1, 2, 3, 4];
let arreglo2 = ["rojo", "verde", "azul"];

// Constante
const objeto = { nombre: "Josue", edad: 22 };
console.log(objeto.nombre); // Imprime "Josue"
const objeto3 = { nombre: "Perez", edad: 21 };
console.log(objeto3.nombre); // Imprime "Perez"



// Mostrar el funcionamiento de al menos dos métodos por cada tipo de dato


// Métodos para cadenas de texto
console.log(cadena1.length); // Obtiene la longitud de la cadena
console.log(cadena2.toUpperCase()); // Convierte la cadena en mayúsculas


// Métodos para booleanos
console.log(booleano1.toString()); // Convierte el booleano en una cadena de texto
console.log(booleano2.valueOf()); // Obtiene el valor primitivo del booleano


// Métodos para objetos
console.log(Object.keys(objeto1)); // Obtiene un arreglo con las claves del objeto
console.log(Object.values(objeto2)); // Obtiene un arreglo con los valores del objeto


// Métodos para arreglos
console.log(arreglo1.length); // Obtiene la longitud del arreglo
console.log(arreglo2.reverse()); // Invierte el orden de los elementos del arreglo


// Métodos para números
console.log(numero2.toString()); // Convierte el número en una cadena de texto
console.log(numero1.toFixed(2)); // Redondea el número a 2 decimales

// Operaciones algebraicas
let resultadoSuma = numero1 + numero2; // Suma de números
let resultadoMultiplicacion = numero1 * numero2; // Multiplicación de números


// NaN (Not a Number)
let resultadoNaN = parseInt("Hola"); // Intento de convertir una cadena no numérica a número
console.log(isNaN(resultadoNaN)); // Verificar si el resultado es NaN


// Math
let numeroAleatorio = Math.random(); // Generar un número aleatorio entre 0 y 1
let resultadoRedondeo = Math.round(numero1); // Redondear un número: 32


// Math (cont.)
let resultadoCeil = Math.ceil(numero2); // Redondear al siguiente número entero: 10
let resultadoFloor = Math.floor(numero2); // Redondear al número entero anterior: 9
let resultadoSqrt = Math.sqrt(numero1); // Calcular la raíz cuadrada: 5.656854249492381
let resultadoAbs = Math.abs(-5); // Calcular el valor absoluto: 5
let resultadoMin = Math.min(1, 2, 3, 4); // Obtener el número mínimo de una secuencia: 1
let resultadoMax = Math.max(1, 2, 3, 4); // Obtener el número máximo de una secuencia: 4


// Incrementos
numero1++; // Incremento en 1: 33
numero2 += 2; // Incremento en 2: 11.11


// Orden de las operaciones
let resultadoOperaciones1 = (numero1 + numero2) * (numero1 - numero2); // Orden de las operaciones
let resultadoOperaciones2 = numero1 - numero2 * (numero1 / numero2); // Orden de las operaciones


// Concatenación
let concatenacion1 = cadena1 + " " + cadena2;
console.log(concatenacion1); // Imprime "Hola, soy el Tte. de Cmns. Ramos JavaScript"


// Concatenando números con cadenas de texto
let concatenacion2 = "El número es: " + numero1;
console.log(concatenacion2); // Imprime "El número es: 32"


// Utilizando backticks y la interpolación de variables
let templateString1 = `${cadena1} - ${cadena2}`;
console.log(templateString1); // Imprime "Hola, soy el Tte. de Cmns. Ramos - JavaScript"


// Combinando texto y variables en un template string
let templateString2 = `Mi nombre es ${objeto1.nombre} y tengo ${objeto1.edad} años.`;
console.log(templateString2); // Imprime "Mi nombre es Gexar y tengo 25 años."


// Booleanos Valores true y false
console.log(booleano1); // Imprime true
console.log(booleano2); // Imprime false


// Evaluación de expresiones booleanas
let resultadoComparacion = 120 > 53;
console.log(resultadoComparacion); // Imprime true

let resultadoIgualdad = 43 === 43;
console.log(resultadoIgualdad); // Imprime true


// Operador AND (&&)
let operacionAnd = true && false;
console.log(operacionAnd); // Imprime false


// Operador OR (||)
let operacionOr = true || false;
console.log(operacionOr); // Imprime true


// Operador NOT (!)
let operacionNot = !true;
console.log(operacionNot); // Imprime false


// Objetos
// Propiedades y valores
// Acceso a las propiedades de un objeto
console.log(objeto1.nombre); // Imprime "Gexar"
console.log(objeto1.edad); // Imprime 25


// Modificación de propiedades de un objeto
objeto2.modelo = "iPad";
console.log(objeto2.modelo); // Imprime "iPad"

objeto1.edad = 26;
console.log(objeto1.edad); // Imprime 26


// Creación de propiedades
// Sintaxis de punto para crear una nueva propiedad
objeto1.pais = "España";
console.log(objeto1.pais); // Imprime "España"

objeto2.color = "plateado";
console.log(objeto2.color); // Imprime "plateado"


// Sintaxis de punto para crear una nueva propiedad
objeto2.Lanzamiento = 2023;
console.log(objeto2.Lanzamiento); // Imprime 2023
objeto2.version = 20.23;
console.log(objeto2.version); // Imprime 20.23



// Delete para borrar propiedad
// Eliminación de una propiedad de un objeto utilizando el operador delete
delete objeto1.edad;
console.log(objeto1.edad); // Imprime undefined
delete objeto1.pais;
console.log(objeto1.pais);



// Intento de eliminación de una propiedad inexistente
delete objeto2.precio;
console.log(objeto2.precio); // Imprime undefined (la propiedad no existe)
delete objeto2.tamaño;
console.log(objeto2.tamaño); // Imprime undefined (la propiedad no existe)


// Freeze: congela el objeto para no modificar nada
// Uso del método Object.freeze para congelar un objeto
Object.freeze(objeto1);
objeto1.edad = 30; // No se permite modificar la propiedad
console.log(objeto1.edad); // Imprime 25 (el valor original no cambia)

objeto2.precio = 1000; // No se permite agregar una nueva propiedad
console.log(objeto2.precio); // Imprime undefined


// Seal: Igual a freeze, pero permite modificar propiedades existentes
// Uso del método Object.seal para sellar un objeto
Object.seal(objeto1);
objeto1.edad = 30; // Se permite modificar la propiedad
console.log(objeto1.edad); // Imprime 30 (la propiedad fue modificada)

delete objeto2.modelo; // No se permite eliminar una propiedad
console.log(objeto2.modelo); // Imprime "iPhone" (la propiedad no fue eliminada)


// Spread operator
// Copia de un arreglo utilizando el operador de propagación (...)
let copiaArreglo1 = [...arreglo1];
console.log(copiaArreglo1); // Imprime [1, 2, 3, 4]


// Combinación de arreglos utilizando el operador de propagación
let combinacionArreglos = [...arreglo1, ...arreglo2];
console.log(combinacionArreglos); // Imprime [1, 2, 3, 4, "rojo", "verde", "azul"]


// Declaración del arreglo
// Declaración de un arreglo con elementos
let arreglo3 = [1, 2, 3, 4];
console.log(arreglo3); // Imprime [1, 2, 3, 4]

// Declaración de un arreglo vacío
let arreglo4 = [];
console.log(arreglo4); // Imprime []


// Length para la extensión
// Obtener la longitud de un arreglo
console.log(arreglo1.length); // Imprime 4


// Modificar la longitud de un arreglo
arreglo2.length = 2;
console.log(arreglo2); // Imprime ["rojo", "verde"]


// Ciclos utilizando arreglos
// Ciclo for para recorrer y mostrar los elementos de un arreglo
for (let i = 0; i < arreglo3.length; i++) {
    console.log(arreglo3[i]);
  }
  // Imprime:
  // 1
  // 2
  // 3
  // 4


// Ciclo for...of para recorrer y mostrar los elementos de un arreglo
for (let elemento of arreglo4) {
    console.log(elemento);
  }
  // No imprime nada, ya que el arreglo está vacío
  
  
//   Métodos útiles
//   Push: agrega un elemento al final del arreglo
arreglo1.push(5);
console.log(arreglo1); // Imprime [1, 2, 3, 4, 5]


// Unshift: agrega un elemento al principio del arreglo
arreglo2.unshift("amarillo");
console.log(arreglo2); // Imprime ["amarillo", "rojo", "verde", "azul"]


// Pop: elimina el último elemento del arreglo y lo devuelve
let elementoEliminado = arreglo3.pop();
console.log(elementoEliminado); // Imprime 4
console.log(arreglo3); // Imprime [1, 2, 3]


// Shift: elimina el primer elemento del arreglo y lo devuelve
let primerElemento = arreglo4.shift();
console.log(primerElemento); // No imprime nada, ya que el arreglo está vacío
console.log(arreglo4); // Imprime []


// Splice: corta el arreglo en un rango de índices establecido
let elementosCortados = arreglo1.splice(1, 2);
console.log(elementosCortados); // Imprime [2, 3]
console.log(arreglo1); // Imprime [1, 4, 5]