const burgerMenu = document.querySelector('.burger-menu');
if(burgerMenu){
    const burgerList = document.querySelector('.burger__list')
    const menuBody = document.querySelector('.menu__body');
    const backBtn = document.querySelector('.back-btn')
    const overlay = document.querySelector('.overlay');
    burgerMenu.addEventListener("click",function(e){
        e.preventDefault();
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
        burgerList.classList.toggle('_active')
        backBtn.classList.toggle('_active')
        overlay.hidden = !overlay.hidden
    });
}
const filterMenuBtn = document.querySelector('.filter-mobile');
if(filterMenuBtn){
    const filterMenu = document.querySelector('.filter-menu')
    const backBtn = document.querySelector('.filter-menu .back-btn')
    const closeBtn = document.querySelector('.filter-nav .popup__close')
    filterMenuBtn.addEventListener("click", function(e){
        e.preventDefault();
        document.body.classList.add('_lock');
        filterMenuBtn.classList.add('_active')
        filterMenu.classList.add('_active')
        backBtn.classList.add('_active')
        if(closeBtn){
            closeBtn.addEventListener("click", function(e){
                e.preventDefault();
                document.body.classList.remove('_lock');
                filterMenuBtn.classList.remove('_active')
                filterMenu.classList.remove('_active')
                backBtn.classList.remove('_active')

            })
        }
    });

}