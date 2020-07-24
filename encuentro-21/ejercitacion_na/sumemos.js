let suma=0;
let promedio=0;

for (i=0; i<5 ; i++){   
    let numeros = parseInt(prompt("Ingrese un numero:"))
    if ( Number.isInteger(numeros)){
        suma+=numeros
        promedio=suma / (i+1)
    }
    else{
        alert('CARACTER INVALIDO')
    }  
}
alert(suma)
alert(promedio)
