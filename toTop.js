// script.js
document.addEventListener('DOMContentLoaded', () => {
    const toTopBtn = document.getElementById('toTopBtn');

    // Показати кнопку після прокрутки 1500 пікселів
    window.addEventListener('scroll', () => {
        if (window.scrollY > 1000) {
            toTopBtn.style.display = 'block';
        } else {
            toTopBtn.style.display = 'none';
        }
    });

    // Повернення на верх при натисканні на кнопку
    toTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
