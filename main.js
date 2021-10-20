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
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toogle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
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

// Projects
const workBtnContainer = document.querySelector('.work__categories')
const projectContainer = document.querySelector('.work__projects')
const projetcs = document.querySelectorAll('.project')
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {             
    return;
  }

  // Project Active state change
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  
  setTimeout(() => {
    projetcs.forEach((project) => {
    if (filter === '*' || filter === project.dataset.type) {
      project.classList.remove('invisible');
    } else {
      project.classList.add('invisible');
    }
  });
    projectContainer.classList.remove('anim-out');
  }, 300);

});

// Utility Function
function scrollIntoView(selector) {
  const scrolltoContact = document.querySelector(selector);
  scrolltoContact.scrollIntoView({ behavior: 'smooth' });
};


// 모르겠음...
// // 1. 모든섹션 요소들과 메튜아이템들을 가지고 온다
// // 2. IntersectionObserver를 이요해서 모든 섹션들을 관찰한다
// // 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다

// const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonials', '#contact'];

// const sections = sectionIds.map(id => document.querySelector(id));
// const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`));

// let selectedNavIndex = 0;
// let selectedNavItem = navItems[0];
// function selectNavItem(selected) {
//   selectedNavItem.classList.remove('active');
//   selectedNavItem = selected;
//   navItem.classList.add('active');
// }


// const observerOptions = {
//   root: null, // null => view port
//   rootMargin: '0px', // -> 바깥 마진
//   threshold: 0.3, // 변하는 정도
// };

// const observerCallback = (entries, observer) => {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting && entry.intersectionRatio > 0) {
//       const index = sectionIds.IndexOf(`#${entry.target.id}`);
//       // 스크롤링이 아래로 되어서 페이지가 올라옴
//       if (entry.boundingClientRect.y < 0) {
//         selectedNavIndex = index + 1;
//       } else {
//         selectedNavIndex = index - 1;
//       }
      
//     }
//   });
// };

// const observer = new IntersectionObserver(observerCallback, observerOptions);
// sections.forEach(section => observer.observe(section));