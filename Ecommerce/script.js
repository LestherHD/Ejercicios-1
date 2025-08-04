document.addEventListener('DOMContentLoaded', () => {
  const botonesComprar = document.querySelectorAll('.btn-comprar');
  const listaCarrito = document.getElementById('lista-carrito');

  botonesComprar.forEach(boton => {
    boton.addEventListener('click', (e) => {
      const producto = e.target.closest('.producto');
      const nombreProducto = producto.querySelector('figcaption').textContent;

      // Crear un elemento para el carrito
      const itemCarrito = document.createElement('li');
      itemCarrito.textContent = nombreProducto;

      // Agregar el producto al carrito
      listaCarrito.appendChild(itemCarrito);
    });
  });
});