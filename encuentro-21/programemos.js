var validUser = "usuario";
var validPassword = "pass";

function validate(usuario, pass) {
  return usuario === validUser && pass === validPassword;
}

do {
  var user = prompt("Ingrese su usuario");
  var password = prompt("Ingrese su password");
  var login = validate(user, password);
} while (login === false);

alert("Bienvenido al sitio!");
