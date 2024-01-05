document.querySelectorAll('.footer__accordion-title').forEach((el)=> {
    el.addEventListener('click', ()=> {

        let accordionDescription = el.nextElementSibling;

        if(accordionDescription.style.maxHeight) {
            document.querySelectorAll('.footer__item-description').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.footer__item-description').forEach((el) => el.style.maxHeight = null);
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px'
        }
    })
})
