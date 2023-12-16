let openMenu = document.querySelector ('#open-menu');
let mobileMenu = document.querySelector('.mobile-nav');
let closeMenu = document.querySelector('#close-menu');
let logo = document.querySelectorAll('.logo');
let map = document.querySelector('#modal-map');
let openMap = document.querySelector('#open-map');
let closeMap = document.querySelector('.close-map');
let backdrop = document.querySelector('#backdrop');

openMap.addEventListener ('click', openMapFunction);
closeMap.addEventListener ('click', closeMapFunction);
backdrop.addEventListener ('click', closeMapFunction);

function closeMapFunction () {
  document.querySelector('#modal-map').style.display = 'none';
  document.querySelector('#backdrop').style.display = 'none';
}

function openMapFunction () {
  document.querySelector('#modal-map').style.display = 'block';
  document.querySelector('#backdrop').style.display = 'block';
}

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










