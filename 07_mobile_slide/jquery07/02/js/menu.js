$(function () {
  // 아코디언메뉴
$(".m_gnb").on("click", "ul > li > a", function(e) {
  e.preventDefault();

  let $clicked = $(this);
  let $submenu = $clicked.next(".depth2");

  if ($submenu.is(":visible")) {
    $submenu.stop(true, true).slideUp();
    $clicked.removeClass("on");
  } else {
    $(".m_gnb>ul>li>a").removeClass("on");
    $(".depth2").stop(true, true).slideUp();
    $clicked.addClass("on");
    $submenu.stop(true, true).slideDown();
  }
});

  // 햄버거버튼 누르면 모바일 더보기 옆에서 슬라이드인 하기
  $(".header .m_all_btn").click(function(){
    $(".cover").fadeIn();
    $(".m_side_wrap").animate({"left": 0},300);
  })
  // 클로즈 버튼으로 닫기
  $(".m_close").click(function(){
    $(".cover").fadeOut();
    $(".m_side_wrap").animate({"left": "-100%"},300);
  })

});
