function adult(age){
    return age >= 18;
}

var adultCount = 0;

do{
    var age = parseInt(prompt("Ingrese su edad"));
    if(adult(age)){
        adultCount++;
    }
}while(age !== 0)

alert("La cantidad de mayores de edad es: " + adultCount);