document.addEventListener('DOMContentLoaded', () => {

  // upward button

    const upward = document.querySelector('.upward');
    if (upward) {
      upward.onclick = (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }   
    }
    
    
  
  // favorite toggler
  function initFavs()
    {
      // Handle Favorites
      const favorites = document.querySelectorAll('.favorite');
      const favoritesText = document.querySelectorAll('.favorite p');
      favorites.forEach(favToggler => {
        favToggler.addEventListener('click', (e)=>{
          e.preventDefault();
          favToggler.classList.toggle('_fav-active');
        favoritesText.forEach(function(favoritesText) {
          if (favToggler.classList.contains('_fav-active')) {
            favoritesText.textContent = "Убрать";
          }
          else{
            favoritesText.textContent = "В избранное";

          }
      });
        })
      })
      
    }

    initFavs()

  // SHOW PASSWORD TOGGLER

  const passwordToggler = document.querySelectorAll('.password-toggler');

  passwordToggler.forEach(toggler => {
    toggler.addEventListener('click', () => {
      const passwordInput = toggler.parentNode.querySelector('.form-control');
      passwordInput.type = passwordInput.type == 'password' ? 'text' : 'password';
    })

  })


  // validation errors

  const form = document.getElementById('AuthForm');


  if (form) {
    form.addEventListener('submit', formSend);
  }


  async function formSend(e) {
    let error = formValidate(form);
    if (error > 0) {
      e.preventDefault();
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = form.querySelectorAll('._req');
    
    for (let i = 0; i<formReq.length; i++){
      const input = formReq[i];
      const formBtn = document.querySelector('.btn')

      formRemoveError(input);

      if(input.classList.contains('_email') && input.value){
        if(emailTest(input)){
          this.errorMsg = 'Неверный формат введённого email';
          formAddError(input);
          error++;
        }
      }
      else if (input.classList.contains('_rep-pass') && input.value || input.classList.contains('_pass') && input.value){
        const inputPass = document.querySelector('._pass');
        const inputRepPass = document.querySelector('._rep-pass');
        if (inputPass.value != inputRepPass.value) {
          this.errorMsg = 'Введенные пароли не совпадают';
          formAddError(input);
          error++;
        }
      }
      else {
        if (!input.value) {
          this.errorMsg = 'Данное поле обязательно к заполнению';
          formAddError(input);
          error++;
        }
      }

      if (error > 0) {
        formBtn.classList.add('btn-error');
      }
      else{
        formBtn.classList.remove('btn-error');
      }
    }

    return error;
  }
  function formAddError(input) {
    input.parentElement.parentElement.classList.add('_form-error');
    input.classList.add('_form-error');
    let inputError = input.parentElement.parentElement.querySelector('.form-error__msg');
    if (inputError) input.parentElement.parentElement.removeChild(inputError);
    input.parentElement.insertAdjacentHTML('afterend', `<div class="form-error__msg">${this.errorMsg}</div>`);
    
  }
  function formRemoveError(input) {
    input.parentElement.parentElement.classList.remove('_form-error')
    input.classList.remove('_form-error')
    let inputError = input.parentElement.parentElement.querySelector('.form-error__msg');
    if (inputError) input.parentElement.parentElement.removeChild(inputError);
  }
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

});

// filter selector
jQuery(($) => {
  $('.select').on('click', '.select__head', function () {
      if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $(this).next().fadeOut(0);
      } else {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut();
          $(this).addClass('open');
          $(this).next().fadeIn(0);
      }
  });

  $('.select').on('click', '.select__item', function () {
      $('.select__head').removeClass('open');
      $(this).parent().fadeOut();
      $(this).parent().prev().text($(this).text());
      $(this).parent().prev().prev().val($(this).text());
      $('.select__head').css('color', '#181818');
  });

  $(document).click(function (e) {
      if (!$(e.target).closest('.select').length) {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut(0);
      }
  });
});


