var number1String = prompt("Ingrese el primer numero");
var number2String = prompt("Ingrese el segundo numero");

var number1 = parseInt(number1String);
var number2 = parseInt(number2String);

if (
  !isNaN(number1String) &&
  isFinite(number1String) &&
  !isNaN(number2String) &&
  isFinite(number2String)
) {
  alert("La suma de sus numeros es " + (number1 + number2));
} else {
  alert("Al menos uno de tus valores, no fue numerico");
}

// Solucion de acamica:
/* if (
  !isNaN(num1) && 
  !isNaN(num2) && 
  numString1.length === num1.toString().length && 
  numString2.length === num2.toString().length
) {
  
    //alerta resultado de la suma
    alert("La suma es: " + (num1 + num2));
} else {
    //alerta error
    alert("Al menos uno de los números ingresados no es válido");
}

https://codepen.io/acamica_dwfs/pen/MWwdrgX
 */
