$(document).ready(function() {
    //up to top 
    $('.up-to-top a').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    //lightbox effect
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'positionFromTop': 200
      });

    //swiper banner effect
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },

        //autoplay
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
      });
});