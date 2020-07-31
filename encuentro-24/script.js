var miVariable = "Kevin";

if (true) {
  let miVariable = "Gera";
  console.log(miVariable);
}

console.log(miVariable);

// funciones

// function declaration
function double(num) {
  return num * 2;
}

console.log(double(4));
console.log(double(8));
console.log(double(10));

// function expression
let double2 = function (num) {
  return num * 2;
};

console.log(double2(20));

// arrow functions

const double3 = (num) => {
  return num * 2;
};

console.log(double3(50));

const isEven = (num) => (num % 2 === 0 ? "Es par" : "Es impar");

// function isEven2(num) {
//   if (num % 2 === 0) {
//     return "Es par";
//   } else {
//     return "es Impar";
//   }
// }

console.log(isEven(2));
console.log(isEven(3));

let persona = { name: "jorge", lastName: "Lopez" };

console.log(persona);

const agregarEdad = (objetoPersona) => {
  objetoPersona.edad = 24;
  return objetoPersona;
};

agregarEdad(persona);

console.log(persona);

// IIFE: immediately invoked function expression

let result = (function (num) {
  return num * 2;
})(100);

console.log(result);

// console.log(gera);

// const y let, tienen "temporal dead zone"
let gera = "asd";

imprimirMiNombre();

function imprimirMiNombre() {
  console.log("Gerardo Sabetta");
}

const secretNumber = 25;

function guessNumber(userNumber) {
  try {
    if (isNaN(userNumber)) {
      throw new Error("No ingresaste un numero!");
    } else if (userNumber > secretNumber) {
      throw new Error("El numero ingresado es mas alto que mi numero...");
    } else if (userNumber < secretNumber) {
      throw new Error("El numero ingresado es mas chico que mi numero");
    } else {
      alert("Ganaste!");
    }
  } catch (err) {
    alert(err);
  }
}

// guessNumber(25);
// try {}
// catch (err) {}

const alumno = { name: "martin", apellido: "soengas" };

function verPropiedadDeMartin() {
  var prop = prompt("que queres saber de martin?");
  var resultado = alumno[prop];
  if (resultado === undefined) {
    throw new Error("Esa propiedad no existe");
  } else {
    return resultado;
  }
}

// try {
//   console.log(verPropiedadDeMartin());
// } catch (err) {
//   alert("Lo siento, algo salio mal, intente mas tarde");
// }
