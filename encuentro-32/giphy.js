const URL = "https://api.giphy.com/v1/gifs/trending";
const URL_SEARCH = "https://api.giphy.com/v1/gifs/search";

const API_KEY = "g9Tc5Eh1F1ZXp90A39StwzgjTulvjFSC";

async function obtenerGifsTendencia() {
  const resultadosDelEndpointDeTendencias = await fetch(
    `${URL}?api_key=${API_KEY}`
  );

  const resultadoComoJSON = await resultadosDelEndpointDeTendencias.json();

  console.log(resultadoComoJSON);
}

const boton = document.getElementById("boton");
const inputDeBusqueda = document.getElementById("busq");
boton.addEventListener("click", busqueda);

async function busqueda() {
  const valorDeBusqueda = inputDeBusqueda.value;
  const resultadosDelEndpointQueBusca = await fetch(
    `${URL_SEARCH}?api_key=${API_KEY}&q=${valorDeBusqueda}&limit=15`
  );

  const resultadosDeBusquedaComoJSON = await resultadosDelEndpointQueBusca.json();

  console.log(resultadosDeBusquedaComoJSON);
}

obtenerGifsTendencia();
