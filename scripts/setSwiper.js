const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView:3,
    loop:false,
    breakpoints:{
        576: {
            slidesPerView: 2,
            loop:true
          },
    }

  });