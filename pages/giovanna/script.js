// Carrossel Principal
new Swiper(".main-carousel", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
  },
});

// Carrossel Secundário
new Swiper(".movie-carousel", {
  slidesPerView: 6,
  spaceBetween: 15,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 6,
    }
  }
});
