const track = document.querySelector('.carousel-track');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const cards = Array.from(track.children);
const cardWidth = cards[0].getBoundingClientRect().width;
let currentIndex = 0;

function updateCarousel() {
    const amountToMove = cardWidth * currentIndex;
    track.style.transform = `translateX(-${amountToMove}px)`;
}

leftButton.addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = cards.length - 1;
    } else {
        currentIndex--;
    }
    updateCarousel();
});

rightButton.addEventListener('click', () => {
    if (currentIndex === cards.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateCarousel();
});
