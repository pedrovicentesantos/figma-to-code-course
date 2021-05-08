const menuBtn = document.querySelector('.menu-btn');
const backBtn = document.querySelector('.back-btn');
const menu = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  // menu.style.transform = 'translateX(0)';
  menu.classList = 'active';
});

backBtn.addEventListener('click', () => {
  // menu.style.transform = 'translateX(-100%)';
  menu.classList = 'hidden';
});