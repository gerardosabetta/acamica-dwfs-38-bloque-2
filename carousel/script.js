const container = document.getElementById("container");
const botonAtras = document.getElementById("atras");
const botonAdelante = document.getElementById("adelante");

async function fetchAndShowImages() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/21");
  const responseAsJSON = await response.json();

  for (let i = 0; i < responseAsJSON.message.length; i++) {
    const perroContainer = document.createElement("div");
    const perroImagen = document.createElement("img");

    perroContainer.className = "perro-container";
    perroImagen.setAttribute("src", responseAsJSON.message[i]);

    perroContainer.appendChild(perroImagen);
    container.appendChild(perroContainer);
  }
}

fetchAndShowImages();

botonAdelante.addEventListener("click", () => {
  container.scrollLeft = container.scrollLeft + 210;
});

botonAtras.addEventListener("click", () => {
  container.scrollLeft = container.scrollLeft - 210;
});
