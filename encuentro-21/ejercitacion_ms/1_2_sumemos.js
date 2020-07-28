let result = 0;
let average = 0;

for(i = 1; i <= 5; i++){
    let numbers = parseInt(prompt("Ingrese un número para sumar")); 
    if(!isNaN(numbers)){
        result += numbers;
        average = result / i; 
    }
    else {
        alert("Error, ingrese solamente números")
    } 
}
alert("Resultado de la suma: " + result);
alert("Promedio de la suma: " + average);