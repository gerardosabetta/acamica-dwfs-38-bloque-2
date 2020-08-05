let name = prompt("Ingrese su nombre");
let backgroundColor = prompt("Ingrese color de fondo");
let textColor = prompt("Ingrese color de texto");
let fontSize = prompt("Ingrese tamaño del texto");

let caja = document.getElementById("caja");

let nuevoElemento = document.createElement("p");
nuevoElemento.textContent = name;
nuevoElemento.style.backgroundColor = backgroundColor;
nuevoElemento.style.color = textColor;
nuevoElemento.style.fontSize = fontSize + "px";

caja.appendChild(nuevoElemento);


// solucion de acamica 👇🏻
// https://codepen.io/acamica_dwfs/pen/abvNgXR