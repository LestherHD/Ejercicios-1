document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');
  const listaCarrito = document.getElementById('lista-carrito');
  const botonesComprar = document.querySelectorAll('.btn-comprar');

  // Toggle menú responsive
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Función para agregar producto al carrito
  botonesComprar.forEach(boton => {
    boton.addEventListener('click', (e) => {
      const producto = e.target.closest('.producto');
      const nombreProducto = producto.querySelector('figcaption').textContent;

      // Crear elemento lista carrito
      const item = document.createElement('li');
      item.textContent = nombreProducto;

      // Agregar al carrito
      listaCarrito.appendChild(item);

      // Alerta de compra
      alert(`Has agregado "${nombreProducto}" al carrito.`);
    });
  });
});
