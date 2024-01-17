const arrowUp = document.querySelector("#arrow-up");
const mainHeader = document.querySelector(".main-header");
const menuButton = document.querySelector(".main-nav__item--mobile");
const hamburger = document.querySelector(".hamburger");
const menuMobile = document.querySelector(".mobile-menu");

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", HeaderHandleScroll);

  if (mainHeader.classList.contains("animated")) {
    mainHeader.classList.add("is--active");
  }
});

function HeaderHandleScroll() {
  let scrollTop = window.scrollY;
  if (scrollTop === 0) {
    // Прокрутка вниз
    mainHeader.classList.remove("white-bg--v");
    mainHeader.classList.remove("scroll");
  } else {
    mainHeader.classList.add("white-bg--v");
    mainHeader.classList.add("scroll");
    // Прокрутка вверх
  }
  return scrollTop;
}

menuButton.addEventListener("click", () => {
  mainHeader.classList.toggle("menu-active");
  hamburger.classList.toggle("is--active");
  document.body.classList.toggle("scroll-disabled");
});

arrowUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  console.log("hi");
});
