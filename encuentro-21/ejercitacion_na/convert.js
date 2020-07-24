let numero
let letra
function convertLetra(numero){
       switch (numero) {
           case 1 :
                letra='a'
               break;
            case 2 :
                letra = 'b'
                break;
            case 3 :
                letra='c'
                break
            case 4 :
                letra = 'd'
                break
            case 5 :
                letra = 'e'
                break
            case 6 :
                letra = 'f'
                break
            case 7 :
                letra = 'g'
                break
            case 8 :
                letra = 'h'
                break    
            case 9 :
                letra = 'i'
                break
            case 10 :
                letra = 'j'
                break
           default:
               letra= "Error:Caracter no valido."
               break;
       } 
       return letra;
}


numero = prompt('Ingrese un número')
    numero = parseInt(numero)
        alert(convertLetra(numero))

    




