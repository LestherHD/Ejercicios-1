document.addEventListener('DOMContentLoaded', () => {
  // Toggle menú en móvil
  const btnToggle = document.getElementById('menu-toggle');
  const nav       = document.getElementById('nav');
  btnToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Alerta con detalle de cada plato
  document.querySelectorAll('.btn-info').forEach(btn => {
    btn.addEventListener('click', () => {
      const nombre = btn.closest('.plato').dataset.nombre;
      alert(`Plato del día: ${nombre}`);
    });
  });

  // Validar y procesar reserva
  const form = document.getElementById('reserva-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const fecha  = document.getElementById('fecha-hora').value;
    const personas = document.getElementById('personas').value;
    if (!nombre || !fecha || !personas) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    alert(`¡Gracias ${nombre}! Tu reserva para ${personas} persona(s) el ${new Date(fecha).toLocaleString()} está confirmada.`);
    form.reset();
  });
});