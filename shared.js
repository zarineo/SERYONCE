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

let logoBlack = document.querySelector ('#logo');
let logoWhite = document.querySelector ('#logo-white');
let iconsWhite = document.querySelector ('.icons-white');
let iconsBlack = document.querySelector ('.icons-black');
//класс мобильного логотипа вместо анимАйтемс
let logoMobile = document.querySelector ('.logo-mobile');


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
        //animItem.classList.remove ('logo-position');
        mainHeader.classList.add ('main-header-mobile');
        videoPosition.classList.add ('main__photo-container--scroll');
        mainTitle.classList.add ('main__title--scroll');
        mainButton.classList.add ('main__button--scroll');
        //logoBlack.classList.add('display-none');
        logoWhite.classList.remove('logo-white');
        iconsBlack.classList.add('display-none');
        iconsWhite.classList.remove('icons-white');
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
setTimeout(()=> {
    animOnScroll();
}, 600);
}



//Отдельная функция для мобильной версии
  window.addEventListener ('scroll', animOnScrollMob);
  function animOnScrollMob (params) {
      const logoMobileHeight = logoMobile.offsetHeight;
      const logoMobileOffset =  offset(logoMobile).top;
      const logoMobileStart = 4;

      let logoMobilePoint = window.innerHeight - logoMobileHeight / logoMobileStart;
      if ((scrollY > logoMobileOffset - logoMobilePoint) && scrollY < (logoMobileOffset + logoMobileHeight)) {
        logoMobile.classList.add ('logo-mobile--scroll');
        mainHeader.classList.add ('main-header-mobile');
        videoPosition.classList.add ('main__photo-container--scroll');
        mainTitle.classList.add ('main__title--scroll');
        mainButton.classList.add ('main__button--scroll');
      
      } else {
      }
      function offset(el) {
        const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
      }
    

    }

    setTimeout(()=> {
      animOnScrollMob();
    }, 800);












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
    //dynamicBullets: true,
    centeredSlides: true,
  },

  scrollbar: {
    el: '.swipper-scrollbar',
//возможность перетаскивать скролл
  },  
  draggable: true,
  loop: true,
  autoplay: {
    delay: 1000,
  }

} );





