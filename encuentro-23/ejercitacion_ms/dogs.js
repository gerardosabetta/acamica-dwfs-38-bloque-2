class Dog{
    constructor(breed, age, color, adoption){
        this.breed = breed;
        this.age = age;
        this.color = color;
        this.adoption = adoption;
    }

    adoptionMod(adoptionMod){
        if(adoptionMod === 1){
            return this.adoption = "adopted";
        }
        else if(adoptionMod === 0){
            return this.adoption = "not adopted";
        }
        else{
            return this.adoption = "not informed";
        }
    }

    adoptionInfo(){
        console.log(this.adoption);
    }
}

let inputBreed = prompt("Ingrese raza del canino");
let inputColor = prompt("Ingrese color del canino");
let inputAge = prompt("Ingrese edad del canino");

const dog1 = new Dog (inputBreed,inputAge,inputColor);

let inputAdoption = dog1.adoptionMod(parseInt(prompt("Ingrese si el canino ha sido adoptado, para ello escriba '1' si fue adoptado o '0' si aún no ha sido adoptado o esta en proceso de")));

console.log(dog1);
console.log(dog1.adoptionInfo());

alert(`Informacion de su sabueso: \n Raza: ${inputBreed} \n Color: ${inputColor} \n Edad: ${inputAge} \n Estado de adopcion: ${inputAdoption}`);