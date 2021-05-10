const menuBtn = document.querySelector('.menu');
const menu = document.querySelector('div.container nav ul');
const exitBtn = document.querySelector('.exit-btn');

menuBtn.addEventListener('click', () => {
  menu.classList = '';
});

exitBtn.addEventListener('click', () => {
  menu.classList = 'hidden';
});