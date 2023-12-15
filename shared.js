let openMenu = document.querySelector ('#open-menu');
let mobileMenu = document.querySelector('.mobile-nav');
let closeMenu = document.querySelector('#close-menu');
let logo = document.querySelectorAll('.logo');

openMenu.addEventListener ('click', openMobileMenu);
closeMenu.addEventListener ('click', closeMobileMenu);

function openMobileMenu () {  
    document.querySelector('.mobile-nav').style.display= 'block';
}

function closeMobileMenu () {  
    document.querySelector('.mobile-nav').style.display= 'none';
}


//const animItem = animItems.length; //для себя запись сделала

window.addEventListener ('scroll', scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    logo.classList.add ('smalli');
    logo.classList.remote ('biggi');
  } else {
      logo.classList.remote ('smalli');
  }
} 

console.log (logo.classList);

new Swiper('.image-slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    centeredSlides: true,
  },

  scrollbar: {
    el: '.swipper-scrollbar',
//возможность перетаскивать скролл
    draggable: true,
  },

    slideToClickedSlide: true,
   
});










