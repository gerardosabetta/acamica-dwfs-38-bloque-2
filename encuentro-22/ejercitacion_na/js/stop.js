const stop = "stop";
let lista = [];
let dato;

do {
  dato = prompt("Ingrese un numero");
        if (!isNaN(dato)) {
            lista.push(dato);
        }
} while (dato !== stop);

alert(`La lista de los numeros ingresados es ${lista}`);
