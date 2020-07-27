const stop = '0'
let dato
let arregloPar=[]
let arregloImpar=[]
let varChars=[]




do {    
        dato = prompt('Ingrese un valor')
        if (dato !=='0'){
                if (parseInt(dato) % 2 ==0 && parseInt(dato) !==0 ){
                        arregloPar.push(dato)            
                }else if (parseInt(dato) % 2 !==0  && !(isNaN(dato))){
                        arregloImpar.push(dato)
                } else if (dato !== '0'){
                        varChars.push(dato)
                }           
        }
} while (dato !==stop);

console.log(arregloPar) 
console.log(arregloImpar)
console.log(varChars)