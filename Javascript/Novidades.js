document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");  // Remove a classe 'active' de todos os slides
      if (i === index) {
        slide.classList.add("active");  // Adiciona a classe 'active' no slide corrente
      }
    });
  }

  document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;  // Move para o slide anterior
    showSlide(currentIndex);
  });

  document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;  // Move para o próximo slide
    showSlide(currentIndex);
  });

  // Exibe o primeiro slide ao carregar a página
  showSlide(currentIndex);
});
