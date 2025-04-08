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
// Reposición automática
function abrirModal() {
  document.getElementById("modalReposicion").style.display = "flex";
}

function confirmarReposicion() {
  const persona = document.getElementById("selectorPersona").value;
  alert("Reposición solicitada a: " + persona);
  document.getElementById("modalReposicion
