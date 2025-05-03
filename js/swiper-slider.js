// country swiper slider

const country_swiper = new Swiper('.country-swiper', {

   // Optional parameters
   loop: true,
   speed: 400,
   spaceBetween: 20,
   navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
   },
   // If we need pagination
   pagination: {
       el: '.swiper-pagination',
   },
   on: {
      setTransition(swiper, duration) {
        swiper.slides.forEach((slide) => {
          slide.style.transitionTimingFunction = 'cubic-bezier(0.25, 1.5, 0.5, 1)';
        });
      },
    },
   slidesPerView: 3,
   breakpoints: {
       1200:{
           slidesPerView: 2
       },
       768: {
         slidesPerView: 2
       },
       576: {
         slidesPerView: 1
       }
   }
})

// university swiper slider

const uni_swiper = new Swiper('.uni-swiper', 
   {
     // Optional parameters
    loop: true,
    speed: 400,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 3,
    // spaceBetween: 20,

    effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    
    breakpoints: {
        1200:{
            slidesPerView: 2
        },
        768: {
          slidesPerView: 2
        },
        576: {
          slidesPerView: 1
        }
    }
})