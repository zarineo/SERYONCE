const arrowUp = document.querySelector("#arrow-up");
const mainHeader = document.querySelector(".main-header");
const menuButton = document.querySelector(".main-nav__item--mobile");
const hamburger = document.querySelector(".hamburger");
const menuMobile = document.querySelector(".mobile-menu");
const headerCollectionsItem = document.querySelector(
  ".main-nav__item--collections"
);
const headerCollectionsSubmenu = document.querySelector(
  ".main-header .submenu"
);
const menuMobileToggleItem = document.querySelector(
  ".mobile-nav__item--collection"
);
const menuMobileSubmenu = document.querySelector(".mobile-nav__item--submenu");

const footerInfoDesktopBlock = document.querySelector(".footer-info__desktop");
const footerDesktopItems = document.querySelectorAll(".footer-info__item");
const footerDesktopItemsBody = document.querySelectorAll(
  ".footer-info__body--item"
);

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

headerCollectionsItem.addEventListener("click", () => {
  headerCollectionsSubmenu.classList.toggle("is--active");
  mainHeader.classList.toggle("menu-active--submenu");
});

menuButton.addEventListener("click", () => {
  mainHeader.classList.toggle("menu-active");
  hamburger.classList.toggle("is--active");
  document.body.classList.toggle("scroll-disabled");
});

menuMobileToggleItem.addEventListener("click", () => {
  menuMobileSubmenu.classList.toggle("is--active");
});

arrowUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

footerDesktopItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    footerDesktopItems.forEach((otherItem, i) => {
      if (otherItem !== item) {
        otherItem.classList.remove("is--active");
        footerDesktopItemsBody[i].classList.remove("is--active");
      }
    });
    item.classList.toggle("is--active");
    footerDesktopItemsBody[index].classList.toggle("is--active");
  });
});
