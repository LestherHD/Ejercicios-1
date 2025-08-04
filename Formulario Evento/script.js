document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('inscripcion-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Campos requeridos
    const nombre   = document.getElementById('nombre');
    const email    = document.getElementById('email');
    const entrada  = document.getElementById('entrada');
    const terminos = document.getElementById('terminos');

    // Validación de email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reseteo de estilos de error
    [nombre, email, entrada, terminos].forEach(el => {
      el.classList.remove('error');
    });

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
      terminos.classList.add('error');
      valido = false;
    }

    if (!valido) {
      alert('Por favor completa todos los campos requeridos correctamente.');
      return;
    }

    // Éxito
    alert(`¡Inscripción recibida!\nGracias ${nombre.value.trim()} por registrarte.`);
    form.reset();
  });
});