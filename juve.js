// BOTAO PARA TOGGLE DO MENU
const menuToggle = document.querySelector('.menu-toggle');
const navegation = document.querySelector('.navegation');
menuToggle.addEventListener('click', () => {
    navegation.classList.toggle('open');
});

// SCROLL PARA OCULTAR/EXIBIR O HEADER
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll para baixo
        header.classList.add("hide");
    } else {
        // Scroll para cima
        header.classList.remove("hide");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
});

// CARROSSEL DE IMAGENS
const leftBtn = document.querySelector(".carrossel-btn.left");
const rightBtn = document.querySelector(".carrossel-btn.right");
const carrosselImages = document.querySelector(".carrossel-images");

leftBtn.addEventListener("click", () => {
    carrosselImages.scrollBy({
        left: -220, // Largura do card + gap
        behavior: "smooth"
    });
});

rightBtn.addEventListener("click", () => {
    carrosselImages.scrollBy({
        left: 220,
        behavior: "smooth"
    });
});