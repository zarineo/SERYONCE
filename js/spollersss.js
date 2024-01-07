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
            accordionDescription.style.paddingBottom = '0';

        } else {
            document.querySelectorAll('.footer__item-description').forEach((el) => el.style.maxHeight = null);
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 16 + 'px';
            function readLessFun() {
                readMore.style.display = 'none';
                readLess.style.display = 'block';
            }
            readLessFun();
            accordionDescription.style.paddingBottom = '16px';
        }
    })
})

document.querySelectorAll('.accordion__title').forEach((accord)=> {
    accord.addEventListener('click', ()=> {
        let accordDescription = accord.nextElementSibling;
        let readMore = accord.firstElementChild;
        let readLess = accord.lastElementChild;
        if(accordDescription.style.maxHeight) {
            document.querySelectorAll('.accordion__description').forEach((accord) => accord.style.maxHeight = null)
            readMoreFun();
            accordDescription.style.paddingBottom = '0';

        } else {
            document.querySelectorAll('.-accordion__description').forEach((accord) => accord.style.maxHeight = null);
            accordDescription.style.maxHeight = accordDescription.scrollHeight + 16 + 'px';
            readLessFun();
            accordDescription.style.paddingBottom = '16px';
        }
    })
})








