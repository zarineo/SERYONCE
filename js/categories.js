let openFilter = document.querySelector("#open-filter");
let closeModal = document.querySelectorAll(".close");
let filterModal = document.querySelector("#filter");
let wishlist = document.querySelector("#wishlist");
let modal= document.querySelector(".modal");
let backdropModal=document.querySelector(".modal__backdrop");
let openWishlist = document.querySelector('#open-wishlist');

//открываем модальное окошко
openFilter.addEventListener('click',()=> {
  document.querySelector("body").classList.toggle('overflow-hidden');
  filterModal.classList.toggle('modal-active');
  backdropModal.classList.toggle('modal-active');
});

openWishlist.addEventListener('click',()=> {
  document.querySelector("body").classList.toggle('overflow-hidden');
  wishlist.classList.toggle('modal-active');
  backdropModal.classList.toggle('modal-active');
});

closeModal.forEach(el => {
  el.addEventListener('click',()=> {
    wishlist.classList.remove('modal-active');
    modal.classList.remove('modal-active');
    modal.style.transform="100%";
    backdropModal.classList.remove('modal-active');
    document.querySelector("body").classList.remove('overflow-hidden');
  });
})

//закрываем модальное окошко
// closeModal.addEventListener('click',()=> {
//   modal.classList.remove('modal-active');
//   modal.style.transform="100%";
//   backdropModal.classList.remove('modal-active');
//   document.querySelector("body").style.overflow = "scroll";
// });



//будем посмотреть подключить свайпер, чтоб его

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


