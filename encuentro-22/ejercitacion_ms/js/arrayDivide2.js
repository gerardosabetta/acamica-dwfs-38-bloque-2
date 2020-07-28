var fullArray = [];
var input = prompt("Ingrese cualquier caracter");

while(input != 0){
    fullArray.push(input);
    input = prompt("Ingrese cualquier otro caracter");
}

if(fullArray.length % 3 === 0){
    var equalArray = fullArray.length / 3;
    var indexMiddleArray = equalArray + equalArray;
    var indexEndArray = indexMiddleArray + equalArray;
    var firstArray = fullArray.slice(0, equalArray);
    var middleArray = fullArray.slice(equalArray, indexMiddleArray);
    var lastArray = fullArray.slice(indexMiddleArray, indexEndArray);
}
else{
    fullArray.shift();
    if(fullArray.length % 3 === 0){
        var equalArray = fullArray.length / 3;
        var indexMiddleArray = equalArray + equalArray;
        var indexEndArray = indexMiddleArray + equalArray;
        var firstArray = fullArray.slice(0, equalArray);
        var middleArray = fullArray.slice(equalArray, indexMiddleArray);
        var lastArray = fullArray.slice(indexMiddleArray, indexEndArray);
    }
    else{
        fullArray.pop();
        var equalArray = fullArray.length / 3;
        var indexMiddleArray = equalArray + equalArray;
        var indexEndArray = indexMiddleArray + equalArray;
        var firstArray = fullArray.slice(0, equalArray);
        var middleArray = fullArray.slice(equalArray, indexMiddleArray);
        var lastArray = fullArray.slice(indexMiddleArray, indexEndArray);    
    }
}

console.log(firstArray);
console.log(middleArray);
console.log(lastArray);






