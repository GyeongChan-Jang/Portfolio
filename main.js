'use strict';

const navbar = document.querySelector('#navbar')
const navbarHeight = navbar.getBoundingClientRect().height;

// Make navbar transparent whet it is on the top 
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark')
  } else {
    navbar.classList.remove('navbar--dark')
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// Handle click on "contact me" button on home
const HomeContactBtn = document.querySelector('.home__contact');
HomeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// Home fade out effect when scrolling
const home = document.querySelector('.home__container')
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
}
);

// Page up when click to arrow-up button
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home')
});


// Utility Function
function scrollIntoView(selector) {
  const scrolltoContact = document.querySelector(selector);
  scrolltoContact.scrollIntoView({ behavior: 'smooth' });
};


