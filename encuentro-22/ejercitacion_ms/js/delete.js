let numbers = [];

let input = parseInt(prompt("Ingrese un número o ingrese '0' para salir"));

    while(input !== 0){
        if(!isNaN(input)){
            numbers.push(input);
            input = parseInt(prompt("Ingrese otro número o ingrese '0' para salir"));
        }
        else{
            input = parseInt(prompt("Error, recuerde que solo puede ingresar números, inténtelo nuevamente o ingrese '0' para salir"));
        }
    }

numbers.sort();
numbers.shift();
numbers.pop();

alert("Glacias, vuelva prontos. Su array es: " + numbers);
console.log(numbers);