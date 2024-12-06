const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    window.location.href = 'https://outrosite.com';
  } else {
    // Lógica para o login na mesma página
  }
});