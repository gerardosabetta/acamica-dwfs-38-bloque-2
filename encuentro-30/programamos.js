// referencia al contenedor
let contenedorGeneral = document.getElementById("pokeCtn");

// fetchear pokemones

let pokemon1 = fetch("https://pokeapi.co/api/v2/pokemon/30").then((response) => response.json())

let pokemon2 = fetch("https://pokeapi.co/api/v2/pokemon/46").then((response) => response.json())

let pokemon3 = fetch("https://pokeapi.co/api/v2/pokemon/6").then((response) => response.json())

// hacer un promise.all que use la funcion que los agregue

Promise.all([pokemon1, pokemon2, pokemon3])
  .then(respuestasDelServidor => {
    respuestasDelServidor.sort((valor1, valor2) => {
      if (valor1.name < valor2.name) {
        return -1;
      } else {
        return 1;
      }
    });

    for (let i = 0; i < respuestasDelServidor.length; i++) {
      addToDOM(respuestasDelServidor[i]);
    }
  })
  .catch(err => console.log('Ha ocurrido un error: ', err));

// crear una funcion que los agregue al DOM
function addToDOM(pokemon) {
  // Nombre, ID, e imagen del pokemon
  let container = document.createElement('div');
  let name = document.createElement('h2');
  name.textContent = `${pokemon.name} #${pokemon.id}`;
  let img = document.createElement('img');
  img.setAttribute('src', pokemon.sprites.front_default);
  container.appendChild(name);
  container.appendChild(img);
  contenedorGeneral.appendChild(container);
}
