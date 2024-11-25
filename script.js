const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let index = 0;

function updateSlide(position) {
  slides.style.transform = `translateX(-${position * 100}%)`;
}

prevButton.addEventListener('click', () => {
  index = (index > 0) ? index - 1 : images.length - 1; // Loop back to last image
  updateSlide(index);
});

nextButton.addEventListener('click', () => {
  index = (index < images.length - 1) ? index + 1 : 0; // Loop back to first image
  updateSlide(index);
});