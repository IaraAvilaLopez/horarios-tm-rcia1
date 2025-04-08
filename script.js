const tabla = document.getElementById("horario");

// Cargar datos guardados
window.onload = () => {
  const datosGuardados = localStorage.getItem("horariosTM");
  if (datosGuardados) {
    tabla.innerHTML = datosGuardados;
  }
};

// Guardar automáticamente cada vez que se edita
tabla.addEventListener("input", () => {
  localStorage.setItem("horariosTM", tabla.innerHTML);
});
