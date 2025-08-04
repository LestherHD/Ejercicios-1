document.addEventListener('DOMContentLoaded', () => {
  // Toggle menú en móvil
  const btnMenu = document.getElementById('menu-toggle');
  const nav     = document.getElementById('nav');
  btnMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Slider de capturas
  const slides = Array.from(document.querySelectorAll('.slide'));
  let idx = 0;
  document.getElementById('prev').addEventListener('click', () => {
    slides[idx].classList.remove('active');
    idx = (idx - 1 + slides.length) % slides.length;
    slides[idx].classList.add('active');
  });
  document.getElementById('next').addEventListener('click', () => {
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  });

  // Botón de descarga
  document.getElementById('download-btn').addEventListener('click', () => {
    alert('Gracias por elegir AppFit. Inicia tu descarga desde la tienda de tu dispositivo.');
  });
});