let inputTexto = document.getElementById("texto");
let boton = document.getElementById("addTarea");
let todoList = document.getElementById("todoList");

function addTodo() {
  let li = document.createElement("li");
  li.textContent = inputTexto.value;
  todoList.appendChild(li);
  inputTexto.value = "";
}

boton.addEventListener("click", addTodo);

inputTexto.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    addTodo();
  }
});


// mas info 👇🏻
// https://codepen.io/acamica_dwfs/pen/VwvaJRo