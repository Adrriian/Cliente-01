function clicou(){
    const navegation = document.querySelector('.navegation');
    
    if(navegation.style.display == 'flex'){
        navegation.style.display = 'none';
    } else {
        navegation.style.display = 'flex';
    }


};

const menu = document.querySelector('.menu-mobile');
menu.addEventListener('click', clicou);

