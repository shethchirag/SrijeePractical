export function initializeSliders() {
  window.onload = function () {
    $(".slider").slick({
      autoplay: true,
      autoplaySpeed: 800,
      arrows: false,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding: "40px",
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "20px",
          },
        },
      ],
    });

    $(".slider_right").slick({
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      rtl: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding: "40px",
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "20px",
          },
        },
      ],
    });

    $(".slider_review").slick({
      autoplay: true,
      autoplaySpeed: 8000,
      arrows: true,
      prevArrow: `<img
              src="asset/Group 91.png"
              alt=""
              class="img-prev"
            />`,
      nextArrow: `<img
              src="asset/Group 92.png"
              alt=""
              class="img-next"
            />`,
      speed: 500,
      fade: true,
      cssEase: "linear",
    });
  };
}
