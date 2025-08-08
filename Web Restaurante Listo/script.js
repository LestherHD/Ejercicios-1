document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const fecha = document.getElementById("fecha").value.trim();

      if (!nombre || !correo || !fecha) {
        alert("Por favor, completa todos los campos.");
        return;
      }

      alert("¡Gracias por tu reservación, " + nombre + "!");
      form.reset();
    });
  }
});
