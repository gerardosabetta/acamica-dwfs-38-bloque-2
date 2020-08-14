let suma = (n1, n2) => n1 + n2;
let resta = (n1, n2) => n1 - n2;
let mult = (n1, n2) => n1 * n2;
let div = (n1, n2) => n1 / n2;

let calculadora = (n1, n2, operacion) => {
  return operacion(n1, n2);
};

console.log(calculadora(2, 4, suma));
console.log(calculadora(10, 5, resta));
console.log(calculadora(10, 5, mult));
console.log(calculadora(10, 5, div));

console.log(calculadora(10, 5, (n1, n2) => (n1 + n2) / 2));
