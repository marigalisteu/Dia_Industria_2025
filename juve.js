const menuToggle = document.querySelector('.menu-toggle');
const navegation = document.querySelector('.navegation');
menuToggle.addEventListener('click', () => {
    navegation.classList.toggle('open');
});