// Toggle de menú móvil
const menuBtn   = document.getElementById('menu-btn');
const navLinks  = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Alertas en "Leer más"
const readMoreBtns = document.querySelectorAll('.read-more');

readMoreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('¡Pronto más detalles sobre este artículo!');
  });
});