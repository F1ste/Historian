$('.slider-faq-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-faq__nav'
    });
    $('.slider-faq__nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-faq-wrapper',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });