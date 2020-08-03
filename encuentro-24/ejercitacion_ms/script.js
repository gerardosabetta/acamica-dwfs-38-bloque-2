class Users {
    constructor(name, lastname, email, username, password, active){
    this.name;
    this.lastname;
    this.email;
    this.username;
    this.password;
    this.active;
    }
    
    addUser(name, lastname, email, username, password, active){
        var name = prompt("Ingrese nombre");
        var lastname = prompt("Ingrese apellido");
        var email = prompt("Ingrese email");
        var username = prompt("Ingrese nombre de usuario");
        var password = prompt("Ingrese password");
        var active = parseInt(prompt("ingrese estado 0 para inactivo, 1 para activo"));
        users.push({"name": name, "lastname": lastname, "email": email, "username": username, "password": password ,"active": active});
    }
};

const users = [
    {
        name: "Administrator",
        lastname: "Admin",
        email: "admin@admin.com",
        username: "Admin",
        password: "1234",
        active: 1
    }
];

alert("Bienvenido a la creación/modificacion de usuarios, por favor ingrese un usuario administrador válido para acceder")
let inputUsername = prompt("Ingresa tu usuario");
let inputPassword = prompt("Ingresa tu password");

const validarAdmin = (username,password) => {
    try{
        if (username === "" || password === "") {
            throw new Error ("No ingresaste alguno o ninguno de los campos");
        } 
        else if (inputUsername === "Admin" && inputPassword === "1234") {
            alert(`Bienvenido ${inputUsername} a la creación/modificación de usuarios`);
            alert("A continuación podrá crear un nuevo usuario completando cada requerimiento del sistema, luego podra modificar usuarios ya existentes. Gracias")
            do{
                const userCreation = new Users();
                userCreation.addUser();
                var exitCreation = prompt("Si desea crear otro usuario, presione 'Aceptar', de lo contrario escriba 'Salir'");
            }while(exitCreation !== "Salir");
        } 
        else {
            throw new Error ("Usuario o contraseña no válido");
        }
    }
    catch (error) {
        alert(error);
    }
};

validarAdmin(inputUsername,inputPassword);

console.log(users)
