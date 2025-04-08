// Guardado automático
const tabla = document.getElementById("tabla-horarios");
tabla.addEventListener("input", () => {
  localStorage.setItem("horarios", tabla.innerHTML);
});
window.onload = () => {
  const guardado = localStorage.getItem("horarios");
  if (guardado) {
    tabla.innerHTML = guardado;
  }
};

// Reposición automática
function abrirModal() {
  document.getElementById("modalReposicion").style.display = "flex";
}

function confirmarReposicion() {
  const persona = document.getElementById("selectorPersona").value;
  alert("Reposición solicitada a: " + persona);
  document.getElementById("modalReposicion").style.display = "none";
}
