// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Переключаем класс is-flipped
            card.classList.toggle('is-flipped');
        });
    });
});