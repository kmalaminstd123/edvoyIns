$(document).ready(function () {

  // country slider jquery
  $('.countrySlide-bx-slider').slick({
    centerMode: true,
    centerPadding: '60px', // This creates the half-image effect
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><span><i class="fa-solid fa-angle-left"></i></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span><i class="fa-solid fa-angle-right"></i></span></button>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



  // university slider jquery
  $('.uni-slick-slider').slick({
    centerMode: true,
    centerPadding: '60px', // This creates the half-image effect
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><span><i class="fa-solid fa-angle-left"></i></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span><i class="fa-solid fa-angle-right"></i></span></button>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

});