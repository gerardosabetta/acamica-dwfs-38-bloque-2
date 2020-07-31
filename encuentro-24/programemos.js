let users = ["Diego", "Thiago", "Albeiro", "Nahuel", "Duvan", "Esneider"];

let newUser = prompt("Ingresa tu usuario");

const validarUsuario = (usuario) => {
  try {
    if (!usuario) {
      throw new Error("No ingresaste nombre de usuario!");
    } else {
      for (let i = 0; i < users.length; i++) {
        if (newUser === users[i]) {
          throw new Error("Ese usuario no esta disponible, ya esta en uso");
        }
      }
      users.push(newUser);
      alert(`Bienvenido ${newUser}!`);
      console.log(users);
    }
  } catch (error) {
    alert(error);
    console.log(users);
  }
};

validarUsuario(newUser);

// mas info 👇🏻
// https://codepen.io/acamica_dwfs/pen/WNQwqYR