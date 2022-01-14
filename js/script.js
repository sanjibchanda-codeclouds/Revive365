//preloader
$(window).bind("load", function () {
  jQuery("#loader").fadeOut("slow");
  jQuery("#preloader").delay(0).fadeOut();
});

/*responsive slider*/
$(".responsive").slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//scroll to top script
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });

  $(".scrollup").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
});

//sticky navbar
// window.onscroll = function () {
//   myFunction();
// };
// var header = document.getElementById("header");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
