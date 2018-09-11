const headingButton = document.querySelector('.heading__button');
const articles = document.querySelectorAll('.article');

function toggleArticle() {
  articles.forEach(elem => {
    if (elem.classList.contains('article--hiding') && !elem.classList.contains('article--show'))
      elem.classList.add('article--show');
    else
      elem.classList.remove('article--show');
  });
}

headingButton.addEventListener('click', toggleArticle);
