const productAccordionItems = document.querySelectorAll(
  ".product-description__accordion > .accordion-item"
);

productAccordionItems.forEach((item) =>
  accordionAnimate(item, productAccordionItems)
);

function accordionAnimate(item, items) {
  item.querySelector(".accordion-header").addEventListener("click", () => {
    items.forEach((accItem) => {
      if (accItem !== item) {
        accItem.classList.remove("is--active");
        accItem.querySelector(".accordion-description").style.height = "";
      }
    });

    item.classList.toggle("is--active");
    const description = item.querySelector(".accordion-description");
    if (description.style.height) {
      description.style.height = "";
    } else {
      const bodyHeight = description.querySelector(
        ".accordion-description__body"
      ).offsetHeight;
      description.style.height = `${bodyHeight}px`;

      setTimeout(() => {
        const scrollToPosition = item.offsetTop - 120;
        window.scrollTo({
          top: scrollToPosition,
          behavior: "smooth", // Добавляет плавность скролла
        });
      }, 250);
    }
  });
}
