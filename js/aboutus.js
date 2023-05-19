// 햄버거 버튼
$(function () {
  $(".ham_btn").click(function () {
    $("#on_nav").addClass("on");
  });
  $(".ham_btn_on").click(function () {
    $("#on_nav").removeClass("on");
  });
});


// aos
AOS.init();