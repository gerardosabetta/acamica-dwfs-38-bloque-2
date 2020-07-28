let evenArray = [];
let oddArray= [];
let stringArray = [];

function isEven(num){
    return num % 2 === 0;
}

do{
    var input = prompt("Ingrese un número");

    if(!isNaN(input) && input !== "0"){
        if(isEven(input)){
            evenArray.push(input);
        }
        else{
            oddArray.push(input);
        }     
    }
    if(isNaN(input)){
        stringArray.push(input);
    }
}while(input != 0);

alert("Numeros pares: " + evenArray);
alert("Numeros impares: " + oddArray);
alert("Strings: " + stringArray);

console.log("Numeros pares: " + evenArray);
console.log("Numeros impares: " + oddArray);
console.log("Strings: " + stringArray);