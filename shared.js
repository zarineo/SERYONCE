let openMenu = document.querySelector ('#open-menu');
let mobileMenu = document.querySelector('.mobile-nav');
let closeMenu = document.querySelector('#close-menu');
let logo = document.querySelectorAll('.logo');
let map = document.querySelector('#modal-map');
let openMap = document.querySelector('#open-map');
let closeMap = document.querySelector('.close-map');
let backdrop = document.querySelector('#backdrop');
let body = document.querySelector ('body');
let mainHeader = document.querySelector ('.main-header');
let animItems = document.querySelectorAll ('.animItems');

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
  document.querySelector('body').style.overflow = 'hidden';
}

openMenu.addEventListener ('click', openMobileMenu);
closeMenu.addEventListener ('click', closeMobileMenu);

function openMobileMenu () {  
    document.querySelector('.mobile-nav').style.display= 'block';
    document.querySelector('body').style.overflow = 'hidden';
}

function closeMobileMenu () {  
    document.querySelector('.mobile-nav').style.display= 'none';
}


//const animItem = animItems.length; //для себя запись сделала
if (animItems.length > 0) {
  window.addEventListener ('scroll', animOnScroll);
  function animOnScroll (params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset =  offset(animItem).top;
      const animStart = 0.5;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add ('smalli');
        animItem.classList.remove ('logo-position');
        mainHeader.classList.add ('main-header-mobile')

        
      } else {
        animItem.classList.remove ('.smalli');
      }
    }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}
}




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










