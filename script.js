const playButton = document.querySelector('.cta-button');
const heroSection = document.querySelector('.hero');
const catalogSection = document.querySelector('.catalog');

playButton.addEventListener('click', (e) => {
    e.preventDefault();
    heroSection.classList.add('fade-out');
    setTimeout(() => {
        heroSection.style.display = 'none';
        catalogSection.classList.add('show');
    }, 800);
});