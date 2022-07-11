const burgerMenu = document.querySelector('.burger-menu');
if(burgerMenu){
    const burgerList = document.querySelector('.burger__list')
    const menuBody = document.querySelector('.menu__body');
    const backBtn = document.querySelector('.back-btn')
    const overlay = document.querySelector('.overlay');
    burgerMenu.addEventListener("click",function(e){
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
        burgerList.classList.toggle('_active')
        backBtn.classList.toggle('_active')
        overlay.hidden = !overlay.hidden
    })
}
