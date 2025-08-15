const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let position = 0;
const imgWidth = 140; // largura da imagem + margem

nextBtn.addEventListener('click', () => {
    position -= imgWidth;
    if (Math.abs(position) >= track.scrollWidth - track.clientWidth) {
        position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
});

prevBtn.addEventListener('click', () => {
    position += imgWidth;
    if (position > 0) {
        position = -(track.scrollWidth - track.clientWidth - 10);
    }
    track.style.transform = `translateX(${position}px)`;
});