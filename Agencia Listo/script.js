document.addEventListener('DOMContentLoaded', () => {
  // Toggle menú móvil
  const btnToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  btnToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Alerta de información de servicio
  document.querySelectorAll('.btn-info').forEach(btn => {
    btn.addEventListener('click', () => {
      const nombre = btn.closest('.servicio').dataset.nombre;
      alert(`Servicio: ${nombre}`);
    });
  });

  // Slider de clientes
  const clientes = Array.from(document.querySelectorAll('.cliente'));
  let index = 0;
  document.getElementById('prev').addEventListener('click', () => {
    clientes[index].classList.remove('active');
    index = (index - 1 + clientes.length) % clientes.length;
    clientes[index].classList.add('active');
  });
  document.getElementById('next').addEventListener('click', () => {
    clientes[index].classList.remove('active');
    index = (index + 1) % clientes.length;
    clientes[index].classList.add('active');
  });

  // Validar y enviar formulario de cotización
  const form = document.getElementById('cotizacion-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const empresa = document.getElementById('empresa').value.trim();
    const email = document.getElementById('email').value.trim();
    const servicio = document.getElementById('servicio').value;
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !empresa || !email || !servicio || !mensaje) {
      alert('Por favor completa todos los campos.');
      return;
    }

    alert(
      `Gracias ${nombre} de ${empresa}.\n` +
      `Te enviaremos una cotización de "${servicio}" a ${email}.`
    );
    form.reset();
  });
});
