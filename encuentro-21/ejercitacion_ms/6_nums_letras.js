function numToLetter(num){
    if(num === 1){
        return "A";
    }
    else if(num === 2){
        return "B";
    }
    else if(num === 3){
        return "C";
    }
    else if(num === 4){
        return "D";
    }
    else if(num === 5){
        return "E";
    }
    else if(num === 6){
        return "F";
    }
    else if(num === 7){
        return "G";
    }
    else if(num === 8){
        return "H";
    }
    else if(num === 9){
        return "I";
    }
    else if(num === 10){
        return "J";
    }
}

var transform = parseInt(prompt("Ingrese un número del 1 al 10 para transformarlo en letra"));

if(transform > 0 && transform <= 10){
    alert("La letra es: " + numToLetter(transform));
}
else{
    alert("Solo se admiten números del 1 al 10, inténtelo de nuevo");
}

