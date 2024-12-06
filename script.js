const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentSlide = 0;

// Função para mostrar o próximo slide
const nextSlide = () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
};

// Função para mostrar o slide anterior
const prevSlide = () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
};

// Adicionando eventos aos botões
prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

// Mostrar o primeiro slide por padrão
slides[currentSlide].classList.add('active');