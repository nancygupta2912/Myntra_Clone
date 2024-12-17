// Add functionality for "Add to Cart"
document.querySelectorAll('.product-card button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Product added to cart!');
  });
});
