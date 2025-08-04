document.addEventListener('DOMContentLoaded', () => {
  // Menú móvil
  const btnMenu = document.getElementById('menu-toggle');
  const nav     = document.getElementById('nav');
  btnMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Filtrar artículos por categoría
  const selectCat = document.getElementById('categoria');
  const posts     = document.querySelectorAll('.post');
  selectCat.addEventListener('change', () => {
    const cat = selectCat.value;
    posts.forEach(post => {
      const pc = post.dataset.category;
      post.style.display = (cat === 'Todas' || pc === cat) ? 'block' : 'none';
    });
  });

  // Leer más (alerta simulando lectura ampliada)
  document.querySelectorAll('.btn-read').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.closest('.post').dataset.title;
      alert(`Cargando artículo completo: "${title}"`);
    });
  });

  // Suscripción de boletín
  const form = document.getElementById('suscribe-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    if (!email) {
      alert('Por favor ingresa un email válido.');
      return;
    }
    alert(`¡Gracias por suscribirte, recibirás nuestras noticias en ${email}!`);
    form.reset();
  });
});