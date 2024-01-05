document.querySelectorAll('.footer__accordion-title').forEach((el)=> {
    el.addEventListener('click', ()=> {
        let accordionDescription = el.nextElementSibling;
        let readMore = el.firstElementChild;
        let readLess = el.lastElementChild;
        if(accordionDescription.style.maxHeight) {
            document.querySelectorAll('.footer__item-description').forEach((el) => el.style.maxHeight = null)
            function readMoreFun() {
                readMore.style.display = 'block';
                readLess.style.display = 'none';
            }
            readMoreFun();
            //accordionDescription.style.paddingBottom = '0';

        } else {
            document.querySelectorAll('.footer__item-description').forEach((el) => el.style.maxHeight = null);
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px';
            function readLessFun() {
                readMore.style.display = 'none';
                readLess.style.display = 'block';
            }
            readLessFun();
            //accordionDescription.style.paddingBottom = '16px';
        }
    })
})


