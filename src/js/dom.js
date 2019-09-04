const elements = {
    menu_btn  : document.querySelector('#menu'),
    menu_elem : document.querySelector('nav'),
    menu_close : document.querySelector('.close')
}

elements.menu_btn.addEventListener('change', toggleMenu);
elements.menu_close.addEventListener('click', closeMenu);

// EVENTS FUNCTIONS

function toggleMenu () {
    if(elements.menu_btn.checked){
        elements.menu_elem.classList.add('open-nav');
    }else{
        elements.menu_elem.classList.remove('open-nav');
    }
}

function closeMenu () {
    elements.menu_elem.classList.remove('open-nav');
    elements.menu_btn.checked = false;
}