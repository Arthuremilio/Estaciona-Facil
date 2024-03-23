document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    const closeMenuButton = document.querySelector('.close-menu');
    const checkboxes = document.querySelectorAll('.checkbox');

    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        var row = this.closest('tr');
        if (this.checked) {
          row.style.backgroundColor = 'darkred';
          row.style.color = 'white';
        } else {
          row.style.backgroundColor = '';
          row.style.color = '';
        }
      });
    });
  
    hamburgerMenu.addEventListener('click', function() {
      menu.classList.toggle('open'); 
      overlay.style.display = menu.classList.contains('open') ? 'block' : 'none'; 
    });
  
    overlay.addEventListener('click', function() {
      menu.classList.remove('open'); 
      overlay.style.display = 'none';
    });
  
    closeMenuButton.addEventListener('click', function() {
      menu.classList.remove('open'); 
      overlay.style.display = 'none';
    });
  });