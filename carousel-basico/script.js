const boton = document.getElementById("show-modal");

boton.addEventListener("click", () => {
  const modal = document.createElement("div");
  modal.className = "modal";

  const backdrop = document.createElement("div");
  backdrop.className = "backdrop";

  const header = document.createElement("h1");
  header.textContent = "Bienvenido!";

  modal.appendChild(header);

  const cerrar = document.createElement("button");
  cerrar.addEventListener("click", () => {
    modal.remove();
    backdrop.remove();
  });
  cerrar.textContent = "cerrar";

  modal.appendChild(cerrar);

  document.body.appendChild(backdrop);
  document.body.appendChild(modal);
});
