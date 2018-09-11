const buttonNav = document.querySelector('.button--nav');
const closeNavbar = document.querySelector('.navbar__close');

function toggleNavbar() {
  document.querySelector('.header__navbar').classList.toggle('navbar--hidden');
}

buttonNav.addEventListener('click', toggleNavbar);
closeNavbar.addEventListener('click', toggleNavbar);
