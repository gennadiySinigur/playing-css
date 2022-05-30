const menu = document.getElementById('menu');
const subMenu = document.getElementById('subMenu');
const closeIcon = document.getElementById('closeIcon');

menu.addEventListener('click', () => {
  subMenu.style.display = 'block';
  closeIcon.style.display = 'inline-block';
})

closeIcon.addEventListener('click', () => {
  subMenu.style.display = 'none';
  closeIcon.style.display = 'none';
})