let promesa = new Promise((resolve, reject) => {
  const numeroAlAzar = Math.round(Math.random() * 10);
  setTimeout(() => {
    if (numeroAlAzar % 2 === 0) {
      resolve(numeroAlAzar);
    } else {
      reject(numeroAlAzar);
    }
  }, 2000);
});

promesa
  .then((result) => {
    console.log("Numero par! Promesa exitosa! Tu numero es:" + result);
  })
  .catch((error) => {
    console.log("Numero impar, Promesa rechazada :( Tu numero es: " + error);
  });

let usernameTextField = document.getElementById("user-github");
let button = document.getElementById("buscar");

button.addEventListener("click", () => {
  getUserDataAndConsoleLogIt(usernameTextField.value);
});

function getUserDataAndConsoleLogIt(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}
