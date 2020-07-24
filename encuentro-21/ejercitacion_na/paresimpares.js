let numero;
let cantPar=0;
let cantImpar=0;
let total=0;
let max;


function paridad(numero){
        if(numero % 2 == 0){
            return true
        } 
    return false    
}

numero =  prompt('Ingrese un numero : ')


if (!(Number.isNaN(numero))){
    numero=parseInt(numero)
    while (numero>0) {
        if (paridad(numero)){
            cantPar++
        }
        else{
            cantImpar++
        }
        numero =  prompt('Ingrese un nuevo numero o 0 para salir : ')   
    }
}

if(cantPar > cantImpar){
    alert('Se ingresaron mas numeros pares que impares.')
}else{
    alert('Se ingresaron mas numeros impares que pares.')
}

alert(`Se ingresaron  ${cantPar} de numeros pares y ${cantImpar} de impares. `)
