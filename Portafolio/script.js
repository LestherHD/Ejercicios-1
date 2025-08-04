document.addEventListener('DOMContentLoaded', () => {
  // Toggle menú móvil
  const menuBtn  = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Lightbox para galería
  const modal    = document.createElement('div');
  const modalImg = document.createElement('img');
  modal.classList.add('modal');
  modal.appendChild(modalImg);
  document.body.appendChild(modal);

  document.querySelectorAll('.project img').forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modal.classList.add('active');
    });
  });

  modal.addEventListener('click', () => {
    modal.classList.remove('active');
  });
});