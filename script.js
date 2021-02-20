const burgerBtn = document.querySelector('.navigation__burger-menu');
const menu = document.querySelector('.navigation__mobile');



function transformBtn() {
    burgerBtn.classList.toggle('open');
    

}

function toggleHidden() {
    menu.classList.toggle('hidden');
}


burgerBtn.addEventListener('click', () => {
    toggleHidden();
    transformBtn();

});