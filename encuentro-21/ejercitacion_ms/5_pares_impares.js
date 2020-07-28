function isEven(num){
    return num % 2 === 0;
}

evenCount = 0;
oddCount = 0;

while(numbers != 0){
    var numbers = prompt("Ingrese un número");
    if(numbers != 0){
        if(isEven(numbers)){
            evenCount++;
        }
        else{
            oddCount++; 
        }
    }
}

if(evenCount > oddCount){
    alert("Hubo más ingresos de números pares");
}
else{
    alert("Hubo más ingresos de números impares");
}