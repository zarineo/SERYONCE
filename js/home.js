const mainVideoBlock = document.querySelector(".home-video");

const map = document.querySelector("#modal-map");
const openMap = document.querySelector("#open-map");
const closeMap = document.querySelector(".close-map");
const backdrop = document.querySelector("#backdrop");
const body = document.querySelector("body");

const animItems = document.querySelectorAll(".animItems");
const animBlocks = document.querySelectorAll(".anim-blocks");

openMap.addEventListener("click", openMapFunction);
closeMap.addEventListener("click", closeMapFunction);
backdrop.addEventListener("click", closeMapFunction);

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

// //const animItem = animItems.length; //для себя запись сделала
function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

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
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    MainPageHeaderAnimationOn();
  }, 600);

  MarqueeOn();
});

function MainPageHeaderAnimationOn() {
  mainVideoBlock.classList.add("is--active");
  mainHeader.classList.add("is--active");
}

function MarqueeOn() {
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
}
