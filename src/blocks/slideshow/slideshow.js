let slideshowSlides = document.querySelectorAll('.slideshow__slide'),
    left = document.querySelector('.slideshow--left'),
    right = document.querySelector('.slideshow--right'),
    currSlide = 0;

function resetSlideshow() {
  for (slide of slideshowSlides) {
    slide.style.display = 'none';
  }
}

function switchSlides(direction) {
  currSlide += direction;
  resetSlideshow();
  if (currSlide < 0)
    currSlide = slideshowSlides.length - 1;
  if (currSlide > slideshowSlides.length - 1)
    currSlide = 0;
  slideshowSlides[currSlide].style.display = 'block';
}

switchSlides(0);

left.addEventListener('click', () => {
  switchSlides(-1);
});

right.addEventListener('click', () => {
  switchSlides(1);
});
