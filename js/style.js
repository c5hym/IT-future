$(document).ready(function(){


// swiper.js configuration
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
    },
    breakpoints: {
      991: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
      },
      544: {
        slidesPerView: 1,
      },
    }
  });


// flow-content-verticalalign configuration
  var heightFlow = $('.flow__content .content__list').outerHeight() + 100; // 100 = 50(top, bottom) * 2
  $('.flow__content .verticalline').css('height', heightFlow);


// sticky-header configuration
  var heightHead = $('.header__top-outer').outerHeight()

  $(window).scroll(function() {
  if ($(this).scrollTop() > heightHead){
      $('.header__top-outer').addClass('header__top-sticky-outer');
    }
    else{
      $('.header__top-outer').removeClass("header__top-sticky-outer");
    }
  });
  

// smooth scroll to top configuration
  $(function(){
    $('.toTop').click(function(){
      var speed = 1000;
      $("html, body").animate({scrollTop:0}, speed, "swing");
      return false;
    });
  });


});
