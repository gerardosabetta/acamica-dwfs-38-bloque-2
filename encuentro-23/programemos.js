class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  esMayor() {
    return this.edad > 18;
  }

  nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }
}

let promptNombre = prompt("Ingrese el nombre");
let promptApellido = prompt("Ingrese el apellido");
let promptEdad = prompt("Ingrese el edad");

const mi_persona = new Persona(promptNombre, promptApellido, promptEdad);

console.log(mi_persona);
console.log(mi_persona.esMayor());
console.log(mi_persona.nombreCompleto());
