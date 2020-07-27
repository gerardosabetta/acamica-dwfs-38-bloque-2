let dato 
const lista=[]
let nuevaLista
const stop = '0'
let maximo
let minimo

function eliminaMaxMin(max,min,arreglo){
        var newlista = arreglo
        var indexMax = newlista.indexOf(max)
        var indexMin = newlista.indexOf(min)
        
        newlista.splice(indexMax,1)
        newlista.splice(indexMin,1)
        return newlista    
}


do {
    dato = prompt('Ingrese un numero')
    if(!(isNaN(dato)) && dato !=='0'){
        lista.push(parseInt(dato))
    } 
} while (dato !== stop);

console.log( `La lista numerica ingresada es : ${lista} `)

maximo = Math.max.apply(null,lista)
minimo = Math.min.apply(null,lista)

nuevaLista = eliminaMaxMin(maximo,minimo,lista)

console.log(`Los numeros máximos y minimos respectivamente son : ${maximo} y ${minimo}`)
console.log(`La nueva lista es : ${nuevaLista}`)








