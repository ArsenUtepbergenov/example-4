const buttonsCatalog = document.querySelectorAll('.button--catalog');
const catalogs = document.querySelectorAll('.catalog__item');

function toggleCatalog() {
  catalogs.forEach(elem => {
    elem.classList.toggle('navbar--hidden');
  });
}

buttonsCatalog.forEach(elem => {
  elem.addEventListener('click', toggleCatalog);
});
