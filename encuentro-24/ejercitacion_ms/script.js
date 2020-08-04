class User {
    constructor(name, lastname, email, username, password, active){
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.username = username;
    this.password = password;
    this.active = active;
    }
};

function userAdd(name,lastname,email,username,password,active){
    users.push(new User(name,lastname,email,username,password,active));
}

// function userMod(name){

// }

const users = [
    new User("Administrador", "Admin", "admin@admin.com", "Admin", "1234", 1),
    new User("Martin", "Soengas", "martin@soengas.com", "martin", "1234", 1)
];

console.log(users);

let sessionStatus = 0;

const userValidation = (username, password) => {
        if (username === "" || password === "") {
            alert("No ingresaste alguno de los campos");
        } else {
        for (let i = 0; i < users.length; i++) {
                if (username === users[i].username && password === users[i].password && users[i].active === 1) {
                    alert(`Bienvenido ${inputUsername}`);
                    sessionStatus = 1;
                }else{
                    
                }
            }
        }
        if(sessionStatus === 0){
            alert("Usuario o contraseña incorrectos");
        }
  };

alert("A continuación ingrese su usuario y password para continuar")

let inputUsername = prompt("Ingresa tu usuario");
let inputPassword = prompt("Ingresa tu password");

userValidation(inputUsername, inputPassword);

alert("A continuación podrá crear nuevos usuarios")

do{
    var name = prompt("Ingrese nombre");
    var lastname = prompt("Ingrese apellido");
    var email = prompt("Ingrese email");
    var username = prompt("Ingrese nombre de usuario");
    var password = prompt("Ingrese password");
    var active = parseInt(prompt("ingrese estado 0 para inactivo, 1 para activo"));

    userAdd(name,lastname,email,username,password,active);

    var exit = prompt("Usuario creado con exito, si desea crear otro presione 'Aceptar', de lo contrario escriba 'Salir");

}while(exit !== "Salir")

let searchResult = 0;

function userMod(usermod){
    for(i = 0; i < users.length; i++){
        if(usermod == users[i].username){
            users[i].name = prompt("Modifique el nombre");
            users[i].lastname = prompt("Modifique el apellido");
            users[i].email = prompt("Modifique el email");
            users[i].username = prompt("Modifique el nombre de usuario");
            users[i].password = prompt("Modifique el password");
            users[i].active = parseInt(prompt("Modifique el estado"));
            searchResult = 1;
        }
    }
    if(searchResult === 0){
        alert("Usuario no encontrado");
    }
}

alert("A continuación podrá modificar usuarios buscandolos por su nombre de usuario")

var inputUserMod = prompt("Ingrese nombre de usuario a modificar")

userMod(inputUserMod);
