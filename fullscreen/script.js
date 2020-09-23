const gifs = [
  {
    url: "https://media.giphy.com/media/3oFzms9ePB1MOMo2ek/giphy.gif",
    name: "primer gif",
    author: "gera",
  },

  {
    url: "https://media.giphy.com/media/j3gZpwJTPDHv9fejWz/giphy.gif",
    name: "segundo gif",
    author: "jaime",
  },
];

const container = document.getElementById("appcontainer");

gifs.forEach((gif) => {
  const gifContainer = document.createElement("div");
  const gifImg = document.createElement("img");
  gifImg.setAttribute("src", gif.url);

  gifContainer.appendChild(gifImg);

  // Creacion del modal
  gifContainer.addEventListener("click", () => {
    abrirModal(gif.name, gif.author);
  });

  container.appendChild(gifContainer);
});

function abrirModal(nombreDelGif, autorDelGif) {
  const dialog = document.createElement("div");
  const botonCerrar = document.createElement("button");
  dialog.textContent = `${nombreDelGif} creado por: ${autorDelGif}`;
  dialog.className = "dialog";
  botonCerrar.textContent = "Cerrar";

  // funcionalidad para cerrar
  botonCerrar.addEventListener("click", () => {
    dialog.remove();
  });

  dialog.appendChild(botonCerrar);

  document.body.appendChild(dialog);
}
