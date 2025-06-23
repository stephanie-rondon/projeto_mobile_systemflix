let currentIndex = 0;
const items = document.querySelectorAll('.item');
const totalItems = items.length;
const carousel = document.querySelector('.carousel');

function updateCarousel() {
    const offset = -currentIndex * (items[0].offsetWidth + 20); // 20 = margem entre itens
    carousel.style.transform = `translateX(${offset}px)`;
}

document.querySelector('.arrow.left').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

document.querySelector('.arrow.right').addEventListener('click', () => {
    if (currentIndex < totalItems - 3) { // Exibe 3 itens por vez
        currentIndex++;
        updateCarousel();
    }
});
