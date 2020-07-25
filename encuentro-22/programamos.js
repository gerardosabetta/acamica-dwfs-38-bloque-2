let data = ["auto", 1, 5, "rojo", "verde", 5, 11, "casa", 2, "gerardo"];
let notNumber = [];
let sum = 0;

for (let i = 0; i < data.length; i++) {
  if (typeof data[i] === "number") {
    sum = sum + data[i];
  } else {
    notNumber.push(data[i]);
  }
}

console.log("Resultado de la suma: " + sum);
console.log("Datos no numericos: " + notNumber);
