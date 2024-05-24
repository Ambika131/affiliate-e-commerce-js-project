// header section
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-button');
    const navbarLinks = document.getElementById('navbar-links');

    toggleButton.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
        toggleButton.classList.toggle('hidden'); // Add or remove 'hidden' class
    });

    navbarLinks.addEventListener('click', function() {
        if (navbarLinks.classList.contains('active')) {
            navbarLinks.classList.remove('active');
            toggleButton.classList.remove('hidden'); // Remove 'hidden' class
        }
    });
});

// product section
document.addEventListener('DOMContentLoaded', () => {
  const cart = [];

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-id');
      addToCart(productId);
    });
  });

  function addToCart(productId) {
    const productInCart = cart.find(product => product.id === productId);
    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      cart.push({ id: productId, quantity: 1 });
    }
    console.log(cart);
    alert('Product added to cart!');
  }

  // Slider functionality
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const productItems = document.querySelectorAll('.product-item');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;

  function showSlide(index) {
    const slideWidth = productItems[0].clientWidth;
    sliderWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : productItems.length - 1;
    showSlide(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < productItems.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
  });

  window.addEventListener('resize', () => {
    showSlide(currentIndex);
  });
});
// contact us


