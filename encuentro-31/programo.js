// async function saludar() {
//   let obtenerSaludo = new Promise((resolve, reject) => {
//     const numero = Math.round(Math.random() * 10);
//     if (numero % 2 === 0) {
//       resolve("Hola");
//     } else if (numero > 5) {
//       reject("Error del numero mayor!");
//     } else {
//       resolve("Hello");
//     }
//   });
//   try {
//     let resultadoDeObtenerSaludo = await obtenerSaludo;
//     console.log(resultadoDeObtenerSaludo);
//   } catch (error) {
//     console.log("El numero es muy grande y no me gusta :(");
//   }

//   /*   obtenerSaludo
//     .then((saludo) => {
//       console.log(saludo);
//     })
//     .catch((error) => {
//       console.log("El numero es 3, no me gusta ese numero!!", error);
//     }); */
// }

// saludar();

const apiKey = "91ce61d8d5ec473e7e81269e1fe98b0a";

let searchInput = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");
let results = document.getElementById("results");

async function search() {
  //Fetch con async await
  async function newsSearch(city_name) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}&units=metric&lang=pt_br`;
    const resp = await fetch(url);
    const info = resp.json();
    return info;
  }
  let info = newsSearch(searchInput.value);

  try {
    const respuestaDeOpenWeather = await info;
    results.textContent = `Clima: ${respuestaDeOpenWeather.weather[0].main}, Temperatura:  ${respuestaDeOpenWeather.main.temp} °C`;
  } catch (err) {
    console.log(err);
  }

  // info
  //   .then((response) => {
  //     console.log(response);
  //     results.textContent = `Clima: ${response.weather[0].main}, Temperatura:  ${response.main.temp} °K`;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
}

searchBtn.addEventListener("click", () => {
  search();
});
searchInput.addEventListener("keyup", () => {
  if (event.which === 13 || event.keyCode == 13) {
    search();
  }
});
