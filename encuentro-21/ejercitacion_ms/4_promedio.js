function average(num, quantity){
        return num / quantity;
}

var count = 0;
var result = 0;
var numbers = "";

while(numbers != "Salir"){
    numbers = prompt("Ingrese un número entero o escriba 'Salir'");
    if(numbers > 0 && numbers < 10){
        result += parseInt(numbers);
        count++;
    }
}

alert("El promedio de los numeros ingresados es " + average(result, count));



