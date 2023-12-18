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
let historyPhCont = document.querySelector ('.history__photo-container');
let animBlocks = document.querySelectorAll ('.anim-blocks');
let videoPosition = document.querySelector ('.main__photo-container');
let mainTitle = document.querySelector ('.main__title');
let mainButton = document.querySelector ('.main__button');

openMap.addEventListener ('click', openMapFunction);
closeMap.addEventListener ('click', closeMapFunction);
backdrop.addEventListener ('click', closeMapFunction);

function closeMapFunction () {
  document.querySelector('#modal-map').style.display = 'none';
  document.querySelector('#backdrop').style.display = 'none';
  document.querySelector('body').style.overflow = 'visible';
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
    document.querySelector('body').style.overflow = 'visible';
}
//const animItem = animItems.length; //для себя запись сделала
if (animItems.length > 0) {
  window.addEventListener ('scroll', animOnScroll);
  window.addEventListener ('touchstart', animOnScroll);
  
  function animOnScroll (params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset =  offset(animItem).top;
      const animStart = 4;

      //animItemOffset -- расстрояние элемента от верха

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add ('smalli');
        animItem.classList.remove ('logo-position');
        mainHeader.classList.add ('main-header-mobile');
        videoPosition.classList.add ('main__photo-container--scroll');
        mainTitle.classList.add ('main__title--scroll');
        mainButton.classList.add ('main__button--scroll');
        document.querySelector('.main__title').style.color = '#0F0E0E';
        
      } else {
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

//Появление блоков при прокрутке
//const animItem = animItems.length; //для себя запись сделала
if (animBlocks.length > 0) {
  window.addEventListener ('scroll', animOnScroll);
  function animOnScroll (params) {
    for (let index = 0; index < animBlocks.length; index++) {
      const animBlock = animBlocks[index];
      const animBlockHeight = animBlock.offsetHeight;
      const animBlockOffset =  offset(animBlock).top;
      const animStartBlock = 4;

      let animBlockPoint = window.innerHeight - animBlockHeight / animStartBlock;
      if ((pageYOffset > animBlockOffset - animBlockPoint) && pageYOffset < (animBlockOffset + animBlockHeight)) {
        animBlock.classList.add ('active');
        
      } else {
 
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










