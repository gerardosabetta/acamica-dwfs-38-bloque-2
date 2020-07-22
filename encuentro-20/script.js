var nombre = "Gerardo";
var edad = 24;
var anioActual = "2020"; // ⚠️ Es un String!!
var esProfe = true;

// Para ver el tipo de las variables:
console.log("El tipo de nombre es " + typeof nombre);
console.log("El tipo de edad es " + typeof edad);
console.log("El tipo de anioActual es " + typeof anioActual);
console.log("El tipo de esProfe es " + typeof esProfe);

// condicional
if (esProfe == true) {
  alert(nombre + ", es profesor");
} else {
  alert(nombre + ", no es profesor");
}

// Metodos de string:
// String a mayusculas:
console.log(nombre.toUpperCase());

// String a minusculas
console.log(nombre.toLowerCase());

// Operadores aritmeticos

console.log("2 + 2 = " + (2 + 2));
console.log("2 - 2 = " + (2 - 2));
console.log("2 * 2 = " + 2 * 2);
console.log("2 / 2 = " + 2 / 2);

// Operadores logicos

console.log("false && false = " + false && false);
console.log("false && true = " + false && true);
console.log("true && true = " + true && true);
console.log("false || false = " + false || false);
console.log("false || true = " + false || true);
console.log("true || true = " + true || true);
console.log("!true = " + !true);
console.log("!false = " + !false);

// Operadores de comparacion

// Igualdad
console.log("2 es igual a 2?", 2 == 2);
console.log("2 es igual a 3?", 2 == 3);

// Mayor que

console.log("4 es mayor a 2?", 4 > 2);
console.log("2 es mayor a 4?", 2 > 4);

// Menor que

console.log("4 es menor a 2?", 4 < 2);
console.log("2 es menor a 4?", 2 < 4);

// Mas info en
// https://codepen.io/acamica_dwfs/pen/wvabPbg
