let parrafoQueMeTrajePorSuId = document.getElementById("parWithId");
parrafoQueMeTrajePorSuId.style.backgroundColor = "green";
console.log(parrafoQueMeTrajePorSuId);

let parrafosQueMeTrajePorSusClases = document.getElementsByClassName(
  "parWithClass"
);

for (let i = 0; i < parrafosQueMeTrajePorSusClases.length; i++) {
  parrafosQueMeTrajePorSusClases[i].style.color = "red";
}
console.log(parrafosQueMeTrajePorSusClases);

let parrafosSeleccionadosPorTagName = document.getElementsByTagName("p");

console.log(parrafosSeleccionadosPorTagName);

let elementoQueMeTrajeUsandoQuerySelector = document.querySelector(
  "p #parSpan"
);

// document.querySelectorAll("p");

elementoQueMeTrajeUsandoQuerySelector.style.backgroundColor = "pink";
console.log(elementoQueMeTrajeUsandoQuerySelector);

let container = document.getElementById("container");
let nuevaCabecera = document.createElement("h1");

nuevaCabecera.textContent = "Este elemento fue generado desde Javascript!";

container.appendChild(nuevaCabecera);

// Reemplazar elementos
// parrafoQueMeTrajePorSuId.replaceWith(nuevaCabecera);

let valor = localStorage.getItem("nombre");


// Esto va a funcionar solo una vez, si lo queres repetir
// abre la consola y pon localStorage.removeItem('nombre')


// Si no existe valor, se lo pedimos al usuario
if (!valor) {
  let nuevoNombre = prompt("Ingrese un nuevo nombre");
  localStorage.setItem("nombre", nuevoNombre); // luego de que el usuario nos da el valor, queda persistido!
  valor = localStorage.getItem("nombre");
}

let nuevoElemento = document.createElement("h1");
nuevoElemento.textContent = valor;

container.after(nuevoElemento);


// Mas info 👇🏻
// https://codepen.io/acamica_dwfs/pen/Vwvjozw

