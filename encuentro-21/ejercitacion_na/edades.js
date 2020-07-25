let cantidadMayores = 0
let cantinadMenores = 0
let edad = 1

function esMayor(edad) {
  if (edad >= 18) {
    return true
  }
  return false
}

edad = parseInt(prompt("Ingrese una edad : "))

while (edad > 0) {
  if (esMayor(edad)) {
    cantidadMayores++
  } else {
    cantinadMenores++
  }
  edad = parseInt(prompt("Ingrese una edad : "))
}

alert(
  `Se ingresaron ${cantidadMayores} mayores de edad y ${cantinadMenores} menores de edad`
)
