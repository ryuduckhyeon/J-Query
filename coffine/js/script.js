$(function () {
  $(".btn_close").on("click", function () {
    $(".popup").slideUp();
  });
});
$(function () {
  $(".no_link").on("click", function (e) {
    e.preventDefault();
  });
});
$(function () {
  $(".gnb>li>a").on("mouseenter", function () {
    $("header").animate({ height: "370px" }, 300);
    $(".depth2").stop().fadeIn(300);
  });
  $("header").on("mouseleave", function () {
    $("header").animate({ height: "103px" }, 300);
    $(".depth2").stop().fadeOut(300);
  });
});
// 메인슬라이드
$(document).ready(function () {
  $(".slide").slick({
    autoplay: true,
    // 페이지 버튼 보임
    dots: true,
  });
});
