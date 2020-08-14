// high order function
console.log("Hola gera");
setTimeout(() => {
  console.log("Hola acamica");
}, 2000);
console.log("Chau gera");

//Saludo con callback
function getName(callback){  
  let name = prompt('Ingresá tu nombre: ');  
  callback(name);  
}  

function sayHi(name){  
  alert('Hola ' + name);  
}  
// getName(sayHi);  

//Calculadora con callback: suma y resta

let suma = (n1, n2) => n1 + n2;
let resta = (n1, n2) => n1 - n2;

let calculadora = function (n1, n2, callback){
  return callback(n1, n2);
}

console.log(calculadora(7, 5, resta));
console.log(calculadora(7, 5, suma));
//Calculadora usando la misma función pero haciendo el callback inline
console.log(calculadora(7, 5, function(n1, n2){return n1 - n2}));
console.log(calculadora(7, 5, function(n1, n2){return n1 + n2}));

//Sort normal en un objeto
let productos = [];
productos.push({nombre: 'Remera', precio: 100});
productos.push({nombre: 'Pantalon', precio: 800});
productos.push({nombre: 'Camisa', precio: 300});
productos.sort();
console.log(productos);

//Sort con callback propio para generar orden en la propiedad nombre
let productos2 = [];
productos2.push({nombre: 'Remera', precio: 100});
productos2.push({nombre: 'Pantalon', precio: 800});
productos2.push({nombre: 'Camisa', precio: 300});
productos2.sort(function(valor1, valor2){
  if (valor1.nombre.toLowerCase() < valor2.nombre.toLowerCase()){
      return -1;
  } else {
      return 1;
  }
});
console.log(productos2);

//Sort con callback propio para generar orden en la propiedad precio
let productos3 = [];
productos3.push({nombre: 'Remera', precio: 100});
productos3.push({nombre: 'Pantalon', precio: 800});
productos3.push({nombre: 'Camisa', precio: 300});
productos3.sort(function(valor1, valor2){
  if (valor1.precio < valor2.precio){
      return -1;
  } else {
      return 1;
  }
});
console.log(productos3); 

