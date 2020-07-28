var numsArray = [];

do{
    var numsInput = prompt("Ingrese un numero o escriba 'Stop' para terminar");
    if(numsInput != "Stop"){
        numsArray.push(numsInput);
    }
}while(numsInput != "Stop");

alert(numsArray);