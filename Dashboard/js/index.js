const menuBtn = document.querySelector('.menu-btn');
const backBtn = document.querySelector('.back-btn');
const menu = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  menu.classList = 'active';
});

backBtn.addEventListener('click', () => {
  menu.classList = 'hidden';
});