function clicou(){
    const ul = document.querySelector('ul');
    const menufechado = document.querySelector('.menu-fechado');

    if(ul.style.display == 'flex'){
        ul.style.display = 'none';
    } else {
        ul.style.display = 'flex';
    }

    if(menufechado.style.width == "170px"){
        menufechado.style.width = "70px";
    } else {
        menufechado.style.width = "170px";
    }

}


const menu = document.querySelector('.header-mobile');
menu.addEventListener('click', clicou);