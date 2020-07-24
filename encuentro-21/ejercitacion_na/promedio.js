let promedio;
let inputDato;
let contador=0;
let total=0;
const finPrograma= 'salir'

function promedioCondicional(total,n){
    return (total/n)
}
inputDato = prompt('Ingrese un numero')

 while (finPrograma !== inputDato) {
    inputDato=parseInt(inputDato)
    if(inputDato>=0 && inputDato<10 ){
        total += inputDato
        contador++;
    } 
    inputDato = prompt('Ingrese otro numero o salir para finalizar')
} 
promedio= promedioCondicional(total,contador)

alert(`El promedio de los numeros de un digito ingresados es ${promedio}`)