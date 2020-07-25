let nombre = "Gerardo";
const animal = "Perro";
// var == function scoped

function miFuncion() {
  let nombre = "Martin"; // No sobreescribe a la declaracion de la linea 1, crea una variable llamada `nombre` en el ambito local de esta funcion
  console.log(nombre);
  if (true) {
    let apellido = "Sabetta";
    apellido = "Lopez";
    animal = "Mono";
  }
  // console.log(apellido); // Esto tira error 💥 porque apellido es block scoped! Si fuese var, no habria problema
}

console.log(nombre, apellido);
miFuncion();

// 0 indexed
let alumnos = [
  "Nahuel",
  "Martin",
  "Andres",
  "Agustin",
  "Thiago",
  "Jaime",
  "Fabian",
];

// consultar cantidad de elementos
alumnos.length;

// Recorrer el arreglo
for (let i = 0; i < alumnos.length; i++) {
  alumnos[i] = alumnos[i] + " estudiante";
}

console.log(alumnos);

// Insertar elemento al final del array
alumnos.push("Stid");
// Insertar elemento al principio del array
alumnos.unshift("Esneider");

// Quitar elemento del final del array
alumnos.pop();

// Quitar elemento del principio del array
alumnos.shift();

// Encontrar la posicion de un elemento
alumnos.indexOf("Jaime");

// Ordenar los elementos de un array
alumnos.sort(); // ⚠️ Te cambia el indice de los elementos!!

// Reversear los elementos de un array
alumnos.reverse(); // ⚠️ Tambien te cambia el indice de los elementos

// Recortar un pedazo del array

alumnos.splice(2, 2); // Primer argumento = indice donde empezamos a cortar, segundo argumento = cantidad de elementos a quitar
// 🔗 https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/splice
