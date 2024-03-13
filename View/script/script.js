document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    const closeMenuButton = document.querySelector('.close-menu');
  
    hamburgerMenu.addEventListener('click', function() {
      menu.classList.toggle('open'); // Alterne a classe "open"
      overlay.style.display = menu.classList.contains('open') ? 'block' : 'none'; // Mostra ou esconde o overlay
    });
  
    overlay.addEventListener('click', function() {
      menu.classList.remove('open'); // Fecha o menu ao clicar no overlay
      overlay.style.display = 'none';
    });
  
    closeMenuButton.addEventListener('click', function() {
      menu.classList.remove('open'); // Fecha o menu ao clicar no botão de fechar
      overlay.style.display = 'none';
    });
  });
  