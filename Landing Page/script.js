document.addEventListener("DOMContentLoaded", () => {
  // Toggle menú móvil
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Scroll suave al hacer click en la CTA
  const ctaBtn = document.getElementById("cta-btn");
  ctaBtn.addEventListener("click", () => {
    document.getElementById("contacto")
      .scrollIntoView({ behavior: "smooth" });
  });

  // Validación y respuesta del formulario
  const form = document.getElementById("form-contacto");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!nombre || !email || !mensaje) {
      alert("Por favor completa todos los campos.");
      return;
    }

    alert(`¡Gracias ${nombre}! Pronto nos pondremos en contacto contigo.`);
    form.reset();
  });
});