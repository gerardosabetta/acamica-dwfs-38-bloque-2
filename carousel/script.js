const container = document.getElementById("container"); // <section id="container" class="container"></section>
const botonAtras = document.getElementById("atras");
const botonAdelante = document.getElementById("adelante");

async function fetchAndShowImages() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/21");
  const responseAsJSON = await response.json();

  for (let i = 0; i < responseAsJSON.message.length; i++) {
    const perroContainer = document.createElement("div"); // <div>
    const perroImagen = document.createElement("img"); // <img>

    perroContainer.className = "perro-container"; // <div class="perro-container">
    perroImagen.setAttribute("src", responseAsJSON.message[i]); // <img src="https://blablaperro.com/perrito.jpeg" />

    perroContainer.appendChild(perroImagen); // <div class="perro-container"> <img src="https://blablaperro.com/perrito.jpeg" /> </div>
    container.appendChild(perroContainer);
    /*    
      <section id="container" class="container"> 
        <div class="perro-container"> 
          <img src="https://blablaperro.com/perrito.jpeg" />
        </div> 
      </section> */
  }
}

fetchAndShowImages();

botonAtras.addEventListener("click", () => {
  container.scrollLeft = container.scrollLeft - 210;
});

botonAdelante.addEventListener("click", () => {
  container.scrollLeft = container.scrollLeft + 210;
});
