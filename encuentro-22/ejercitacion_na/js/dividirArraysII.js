let dato
const stop = '0'
let largoLista
let lista = []


function divideArrayDeATres(lista){
        let nuevoArreglo = []

        if (lista.length ==3){
            while(lista.length > 0){
                nuevoArreglo = lista.splice(0,1)
                console.log(nuevoArreglo)
            }
        }else{
            while(lista.length > 0){
                nuevoArreglo = lista.splice(0,3)
                console.log(nuevoArreglo)
            }
        }

        return nuevoArreglo;

}// 🎏🎏🎏🎏🎏🎏  Esta function no hacia lo esperado pero la dejo para reusarla en algun momento, de todas formas es la base de la que si corresponde ⏬⏬⏬


function creaTresArreglos(lista,index) {
    let nuevoArreglo = []
    while(lista.length > 0){
        nuevoArreglo = lista.splice(0,index/3)
        console.log(nuevoArreglo)
    }
}

function recorreArrayNoTres(lista,index){
        let nuevoArreglo = []
        if (index % 3 ==1){
           lista.shift()
           nuevoArreglo = creaTresArreglos(lista,lista.length)
           return nuevoArreglo

        }else if ( index % 3 ==2  ){
            lista.shift()
            lista.pop()
            nuevoArreglo = creaTresArreglos(lista,lista.length)
            
        }
return nuevoArreglo

}

do {
    dato = prompt('Ingrese un valor: ')
        if(dato !=='0'){    
            lista.push(dato)
        }
        

} while (dato !== stop);

// 🎏
console.log(lista)


largoLista= lista.length

    if(largoLista % 3 == 0){
        creaTresArreglos(lista,largoLista)
    }else{
        recorreArrayNoTres(lista,largoLista) 
        
    }

    console.log(largoLista)