/**inicio do menu */

const menu = document.querySelector('.menu-mobile');
menu.addEventListener('click', clicou);

function clicou(){
    const ul = document.querySelector('.ul-menu');
    
    if(ul.style.display == 'flex'){
        ul.style.display = 'none';
    } else {
        ul.style.display = 'flex';
    }


};

/**fim do menu */

const button = document.querySelector('.button');
button.addEventListener('click', busca);

function busca(){
    const estado = document.querySelector('.busca-area')

    if(estado.style.display == 'flex'){
        estado.style.display = 'none';
    } else {
        estado.style.display = 'flex';
    }

}