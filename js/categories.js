let openFilter = document.querySelector("#open-filter");
let closeModal = document.querySelectorAll(".close");
let filterModal = document.querySelector("#filter");
let wishlist = document.querySelector("#wishlist");
let cart = document.querySelector("#cart");
let modal= document.querySelector(".modal");
let backdropModal=document.querySelector(".modal__backdrop");
let openWishlist = document.querySelector('.open-wishlist');
let openCart = document.querySelector('.open-cart');


//открываем модальное окошко
openFilter.addEventListener('click',()=> {
  document.querySelector("body").classList.toggle('overflow-hidden');
  filterModal.classList.toggle('modal-active');
  backdropModal.style.display = "block";
});

openWishlist.addEventListener('click',()=> {
  document.querySelector("body").classList.toggle('overflow-hidden');
  wishlist.classList.toggle('modal-active');
  backdropModal.style.display = "block";
  wishlist.style.overflow = "scroll";
});
openCart.addEventListener('click',()=> {
  document.querySelector("body").classList.toggle('overflow-hidden');
  cart.classList.toggle('modal-active');
  backdropModal.style.display = "block";
  cart.style.overflow = "scroll";
});

//Костыльно закрываем модальные окна
closeModal.forEach(el => {
  el.addEventListener('click',()=> {
    wishlist.classList.remove('modal-active');
    modal.classList.remove('modal-active');
    cart.classList.remove('modal-active');
    modal.style.transform="100%";
    backdropModal.style.display = "none"
    // backdropModal.classList.remove('modal-active');
    document.querySelector("body").classList.remove('overflow-hidden');
  });
});

// Счетчик на товары в корзине
const counters = document.querySelectorAll('[data-counter]');

if (counters) {
  counters.forEach(counter => {
    counter.addEventListener('click', e => {
      const target = e.target;

      if (target.closest('.counter__button')) {
        let value = parseInt(target.closest('.counter').querySelector('input').value);

        if (target.classList.contains('counter__button--plus')) {
          value++
        } else {
          --value
        }

        if (value <= 1) {
          value = 1
        }
        target.closest('.counter').querySelector('input').value = value;
      }
    })
  })
}

//удаляем из корзины товар

// Получаем все элементы с классом "cart__product-delete"
let deleteButtons = document.querySelectorAll('.cart__product-delete');

// Добавляем обработчик клика к каждой кнопке удаления
deleteButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Получаем родительский элемент (в данном случае, блок .cart__item)
    let cartItem = this.closest('.cart__item');

    // Проверяем, что родительский элемент найден, прежде чем удалять
    if (cartItem) {
      // Удаляем родительский элемент
      cartItem.remove();
    }
  });
});

new Swiper('.swiper');

//закрываем модальное окошко
// closeModal.addEventListener('click',()=> {
//   modal.classList.remove('modal-active');
//   modal.style.transform="100%";
//   backdropModal.classList.remove('modal-active');
//   document.querySelector("body").style.overflow = "scroll";
// });



//будем посмотреть подключить свайпер, чтоб его
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,
//
//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },
//
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//
//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });


