// 햄버거 버튼
$(function () {
  $(".ham_btn").click(function () {
    $("#on_nav").addClass("on");
  });
  $(".ham_btn_on").click(function () {
    $("#on_nav").removeClass("on");
  });
});


// bestseller 마우스 오버 시 이미지 변경
$(function () {
  $('.best_box1 img').mouseenter(function () {
    $(this).attr('src', './img/3_mmt3_on.jpg');
  }).mouseleave(function () {
    $(this).attr('src', './img/3_mmt3.jpg');
  });
  $('.best_box2 img').mouseenter(function () {
    $(this).attr('src', './img/3_mtw3_on.jpg');
  }).mouseleave(function () {
    $(this).attr('src', './img/3_mtw3.jpg');
  });
  $('.best_box3 img').mouseenter(function () {
    $(this).attr('src', './img/3_hd450bt_on.jpg');
  }).mouseleave(function () {
    $(this).attr('src', './img/3_hd450bt.jpg');
  });
  $('.best_box4 img').mouseenter(function () {
    $(this).attr('src', './img/3_ie300_on.jpg');
  }).mouseleave(function () {
    $(this).attr('src', './img/3_ie300.jpg');
  });
});


// newItems 슬라이드
const swiperNewItems = new Swiper('.mySwiper', {
  loop: true,
  speed: 2500,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 300,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: 'fraction',
  },
  navigation: {
    prevEl: ".prev",
    nextEl: ".next",
  }
});


// event 슬라이드
const swiperEvent = new Swiper('.swiper-container', {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    }
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    }
  },
  breakpoints: {
    1800: {
      slidesPerView: 3,
      spaceBetween: 10,
    }
  }
});


// aos
AOS.init();