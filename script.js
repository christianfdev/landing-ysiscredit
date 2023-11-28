const btnMenu = document.getElementById('btn-menu');
const menuMob = document.getElementById('menu-mobile');


function activeMenu(){
    menuMob.classList.toggle('active');
    btnMenu.classList.toggle('btn-active');
}

btnMenu.addEventListener('click', activeMenu);