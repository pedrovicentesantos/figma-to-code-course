const saveIcons = document.querySelectorAll('img.save');
const savedIcons = document.querySelectorAll('img.saved');

const menuBtn = document.querySelector('img.menu');
const filters = document.querySelector('div.filters');
const filtersStyles = window.getComputedStyle(filters);
 
const defaultFiltersVisibility = 'circle(0% at 100% 0%)';

menuBtn.addEventListener('click', () => {
  if (filtersStyles.getPropertyValue('clip-path') === defaultFiltersVisibility) {
    filters.classList = 'filters';
  } else {
    filters.classList = 'filters hidden';
  }
});

document.addEventListener('mouseup', (event) => {
  if (!filters.classList.contains('hidden')) {
    if (!filters.contains(event.target)) {
      filters.classList = 'filters hidden';
    }
  }
});

saveIcons.forEach(saveIcon => {
  saveIcon.addEventListener('click', () => {
    saveIcon.classList = 'save hidden';
    saveIcon.nextElementSibling.classList = 'saved';
  });
});

savedIcons.forEach(savedIcon => {
  savedIcon.addEventListener('click', () => {
    savedIcon.classList = 'saved hidden';
    savedIcon.previousElementSibling.classList = 'save';
  });
});


