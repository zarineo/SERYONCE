const videoPosition = document.querySelector(".home-video__container");
const videoTitle = document.querySelector(".home-video__title");
const videoButton = document.querySelector(".home-video__button");

const mainHeader = document.querySelector(".main-header");

const animItems = document.querySelectorAll(".animItems"); //?
const animBlocks = document.querySelectorAll(".anim-blocks");

let openMenu = document.querySelector("#open-menu");
let mobileMenu = document.querySelector(".mobile-nav");
let closeMenu = document.querySelector("#close-menu");
let logo = document.querySelectorAll(".logo");
let map = document.querySelector("#modal-map");
let openMap = document.querySelector("#open-map");
let closeMap = document.querySelector(".close-map");
let backdrop = document.querySelector("#backdrop");
let body = document.querySelector("body");

let logoBlack = document.querySelector("#logo");
let logoWhite = document.querySelector("#logo-white");
let iconsWhite = document.querySelector(".icons-white");
let iconsBlack = document.querySelector(".icons-black");
//класс мобильного логотипа вместо анимАйтемс
let logoMobile = document.querySelector(".logo-mobile");
let readMore = document.querySelector(".read-more");
let readLess = document.querySelector(".read-less");
let arrowUp = document.querySelector("#arrow-up");

readMore.addEventListener("click", readMoreFun);
readLess.addEventListener("click", readLessFun);
openMap.addEventListener("click", openMapFunction);
closeMap.addEventListener("click", closeMapFunction);
backdrop.addEventListener("click", closeMapFunction);

function readMoreFun() {
  document.querySelector(".read-more").style.display = "none";
  document.querySelector(".read-less").style.display = "block";
  document.querySelector(".limited").style.maxHeight = "none";
}
function readLessFun() {
  document.querySelector(".read-more").style.display = "block";
  document.querySelector(".read-less").style.display = "none";
  document.querySelector(".limited").style.maxHeight = "72px";
}

function closeMapFunction() {
  document.querySelector("#modal-map").style.display = "none";
  document.querySelector("#backdrop").style.display = "none";
  document.querySelector("body").style.overflow = "visible";
}

function openMapFunction() {
  document.querySelector("#modal-map").style.display = "block";
  document.querySelector("#backdrop").style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
}

openMenu.addEventListener("click", openMobileMenu);
closeMenu.addEventListener("click", closeMobileMenu);

function openMobileMenu() {
  document.querySelector(".mobile-nav").style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
}

function closeMobileMenu() {
  document.querySelector(".mobile-nav").style.display = "none";
  document.querySelector("body").style.overflow = "visible";
}
//const animItem = animItems.length; //для себя запись сделала
if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);

  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      //animItemOffset -- расстрояние элемента от верха

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (
        scrollY > animItemOffset - animItemPoint &&
        scrollY < animItemOffset + animItemHeight
      ) {
        videoPosition.classList.add("home-video__container--scroll");
        videoTitle.classList.add("home-video__title--scroll");
        videoButton.classList.add("home-video__button--scroll");

        animItem.classList.add("smalli"); // ?

        mainHeader.classList.add("main-header--scroll");

        //logoBlack.classList.add('display-none');
        logoWhite.classList.remove("logo-white");
        iconsBlack.classList.add("display-none");
        iconsWhite.classList.remove("icons-white");
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  // setTimeout(()=> {
  //    animOnScroll();
  // }, 600);
}

//Отдельная функция для мобильной версии
window.addEventListener("scroll", animOnScrollMob);
function animOnScrollMob() {
  const logoMobileHeight = logoMobile.offsetHeight;
  const logoMobileOffset = offset(logoMobile).top;
  const logoMobileStart = 4;

  let logoMobilePoint = window.innerHeight - logoMobileHeight / logoMobileStart;
  if (
    scrollY > logoMobileOffset - logoMobilePoint &&
    scrollY < logoMobileOffset + logoMobileHeight
  ) {
    logoMobile.classList.add("logo-mobile--scroll");
    mainHeader.classList.add("main-header--scroll");
    videoPosition.classList.add("home-video__container--scroll");
    videoTitle.classList.add("home-video__title--scroll");
    videoButton.classList.add("home-video__button--scroll");
    iconsBlack.classList.add("display-none");
    iconsWhite.classList.remove("icons-white");
  }
}

// setTimeout(()=> {
//   animOnScrollMob();
// }, 800);

//Появление блоков при прокрутке
//const animItem = animItems.length; //для себя запись сделала
if (animBlocks.length > 0) {
  window.addEventListener("scroll", animOnScrolling);
  function animOnScrolling() {
    for (let index = 0; index < animBlocks.length; index++) {
      const animBlock = animBlocks[index];
      const animBlockHeight = animBlock.offsetHeight;
      const animBlockOffset = offset(animBlock).top;
      const animStartBlock = 4;

      let animBlockPoint =
        window.innerHeight - animBlockHeight / animStartBlock;
      if (
        pageYOffset > animBlockOffset - animBlockPoint &&
        pageYOffset < animBlockOffset + animBlockHeight
      ) {
        animBlock.classList.add("active");
      }
    }
  }

  setTimeout(() => {
    animOnScroll();
  }, 1500);
}
//
// new Swiper('.image-slider', {
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     //dynamicBullets: true,
//     centeredSlides: true,
//   },
//
//   scrollbar: {
//     el: '.swiper-scrollbar',
// //возможность перетаскивать скролл
//   },
//   draggable: true,
//   loop: true,
//   autoplay: {
//     delay: 1000,
//   }
// });
//
document.addEventListener("DOMContentLoaded", (event) => {
  const marquee = document.getElementById("marquee");
  let marqueeContent = marquee.innerHTML;
  marquee.innerHTML = marqueeContent + marqueeContent; // Дублируем контент для непрерывности

  let marqueePos = 0;
  const speed = 1; // Скорость движения

  function moveMarquee() {
    marqueePos -= speed;

    // Проверяем, достиг ли текст конца
    if (-marqueePos >= marquee.offsetWidth / 3) {
      marqueePos = 0;
    }

    marquee.style.transform = `translateX(${marqueePos}px)`;

    requestAnimationFrame(moveMarquee);
  }

  moveMarquee();
});

arrowUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  console.log("hi");
});
