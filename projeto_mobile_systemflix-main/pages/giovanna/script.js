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

document.addEventListener('DOMContentLoaded', function() {
  // Mapeamento de palavras-chave para URLs
  const redirecionamentos = {
    "coraline": "../lyly/coraline/index2.html",
    "divertidamente": "../lyly/divertidamente/index2.html",
    "frozen": "../lyly/frozen/index2.html",
    // Adicione outros filmes aqui (em minúsculas)
  };

  document.getElementById('formBusca').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o recarregamento
    
    const termo = document.getElementById('campoBusca').value.trim().toLowerCase();
    const url = redirecionamentos[termo];

    if (url) {
      window.location.href = url; // Redireciona
    } else {
      alert("Palavra-chave não reconhecida!\nTente: Coraline, Divertidamente, Frozen");
    }
  });
});