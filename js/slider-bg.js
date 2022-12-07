$(document).ready(function(){
    $('.slider-bg').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:70000,
        adaptiveHeight: true,
        appendDots:('.nav__container')
      });

      $('.news-wrapper').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            adaptiveHeight: true,
        responsive: [
              {
                breakpoint: 991.98,
                settings: {
                    rows: 3,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                }
              },
          ],
        appendArrows:('.news-slider-nav'),
        
      });
})

