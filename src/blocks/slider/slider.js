let slides = document.querySelectorAll('.slider__slide'),
    dots = document.querySelectorAll('.slider__dot'),
    sliderDots = document.querySelector('.slider__dots'),
    arrowLeft = document.querySelector('.slider--left'),
    arrowRight = document.querySelector('.slider--right'),
    currentSlide = 0;

function getElementIndex(node) {
  let index = 0;
  while (node = node.previousElementSibling)
    index++;
  return index;
}

function reset() {
  for (slide of slides) {
    slide.style.display = 'none';
  }
}

function resetDots() {
  for (dot of dots) {
    dot.style.backgroundColor = '#88a0ab';
  }
}

function switchSlide(direction) {
  currentSlide += direction;
  reset();
  resetDots();
  if (currentSlide < 0)
    currentSlide = slides.length - 1;
  if (currentSlide > slides.length - 1)
    currentSlide = 0;
  slides[currentSlide].style.display = 'block';
  dots[currentSlide].style.backgroundColor = '#30454f';
}

function setCurrent(current) {
  if (current > slides.length - 1 || current < 0)
    currentSlide = 0;
  currentSlide = current;
  reset();
  resetDots();
  slides[currentSlide].style.display = 'block';
  dots[currentSlide].style.backgroundColor = '#30454f';
}

switchSlide(0);

arrowLeft.addEventListener('click', () => {
  switchSlide(-1);
});

arrowRight.addEventListener('click', () => {
  switchSlide(1);
});

sliderDots.addEventListener('click', event => {
  const target = event.target;

  if (!target.classList.contains('slider__dot'))
    return;

  setCurrent(getElementIndex(target));
});
