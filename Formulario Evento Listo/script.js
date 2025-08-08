document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('inscripcion-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre   = document.getElementById('nombre');
    const email    = document.getElementById('email');
    const entrada  = document.getElementById('entrada');
    const terminos = document.getElementById('terminos');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset errores
    [nombre, email, entrada].forEach(el => el.classList.remove('error'));

    let valido = true;

    if (!nombre.value.trim()) {
      nombre.classList.add('error');
      valido = false;
    }

    if (!emailPattern.test(email.value.trim())) {
      email.classList.add('error');
      valido = false;
    }

    if (!entrada.value) {
      entrada.classList.add('error');
      valido = false;
    }

    if (!terminos.checked) {
      alert('Debes aceptar los términos y condiciones.');
      valido = false;
    }

    if (!valido) {
      alert('Por favor completa todos los campos requeridos correctamente.');
      return;
    }

    alert(`¡Inscripción recibida!\nGracias ${nombre.value.trim()} por registrarte.`);
    form.reset();
  });
});
