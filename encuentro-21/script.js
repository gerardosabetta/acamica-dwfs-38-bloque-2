// for loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// while
console.log("while");
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// do while
// console.log("do while");
// var i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// switch
console.log("switch");
switch ("+") {
  case "+":
    console.log("Sumar");
    break;
  case "-":
    console.log("Restar");
    break;
  case "/":
    console.log("Dividir");
    break;
  default:
    console.log("Operacion desconocida");
}

// funcion
console.log("funciones");
function esPar(numero) {
  return numero % 2 === 0;
}

console.log(esPar(2));
console.log(esPar(7));
console.log(esPar(13));
console.log(esPar(6));
