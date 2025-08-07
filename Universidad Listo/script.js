document.addEventListener('DOMContentLoaded', () => {
  // Toggle menú móvil
  const menuBtn  = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Detalles de programas y eventos
  document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('article');
      const nombre = parent.dataset.nombre || parent.dataset.titulo;
      const fecha  = parent.dataset.fecha ? ` Fecha: ${parent.dataset.fecha}` : '';
      alert(`${nombre}${fecha}`);
    });
  });

  // Leer más en noticias
  document.querySelectorAll('.btn-read-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const li     = btn.closest('li');
      const titulo = li.dataset.titulo;
      alert(`Noticia: ${titulo}`);
    });
  });
});