let car = {
  brand: "Fiat",
  model: "Freemont",
  year: 2011,
  color: "gray",
  fuel: 100,
  drive: function () {
    this.fuel = this.fuel - 6;
    console.log("Brrmmm, arrancando. ");
  },
};

var string = "brand";
// Property look-up
console.log(car.brand);
console.log(car["color"]);
console.log(car[string]);

console.log(car.fuel);
car.drive();
car.drive();
car.drive();
car.drive();
car.drive();
car.drive();
car.drive();
car.drive();
console.log(car.fuel);

car.color = "red";

console.log(car);

function User(username, name, lastName, email, password) {
  this.username = username;
  this.name = name;
  this.lastName = lastName;
  this.email = email;
  this.password = password;
  this.isAdmin = false;
}

var usuario_1 = new User("stid_l", "Stid", "Lozada", "stid@lozada.com", 1234);

console.log(usuario_1);

class Clothes {
  constructor(productName, type, size, color, price, quantity) {
    this.productName = productName;
    this.type = type;
    this.size = size;
    this.color = color;
    this.price = price;
    this.quantity = quantity;
  }

  getSaleInfo() {
    return `${this.productName.toUpperCase()} - ${this.type} ${this.color} ${
      this.size
    } \n Precio: $${this.price}`;
  }
}

let remera = new Clothes(
  "remera ivy park",
  "Remera",
  "L",
  "Blanca",
  1299,
  23
);

console.log(remera);

console.log(remera.getSaleInfo());


// mas info 👇🏻
// https://codepen.io/acamica_dwfs/pen/VwLOyXK