$(function(){
    // popup창 닫기 버튼 클릭시 높이 0으로
    $(".btn_close").click(function(){
        $(".popup").slideUp();
    })
})

$(function(){
    // 주메뉴에 마우스를 올렸을때
    $(".gnb>li>a").mouseenter(function(){
        $("header").stop().animate({'height':'370px'},300)
        $(".depth2").stop().fadeIn(300);
    })

    // 주메뉴에서 마우스를 벗어났을때
    $("header").mouseleave(function(){
        $("header").stop().animate({'height':'103px'},300)
        $(".depth2").stop().fadeOut(300);
    })
})

// 메인슬라이드
$(document).ready(function(){
  $('.slide').slick({
    autoplay: true,
    dots: true,
  });
});

// 배너슬라이드

$(document).ready(function(){
  $('.bannerslide').slick({
    autoplay: true,
    arrows: false,
    dots: true,
  });
});

// tab 기능
$(".tab li").click(function(e){
  // 눌렀을때 위로 올라가는거 방지
  e.preventDefault();
  $(".tab li").removeClass("on");
  $(this).addClass("on");
})

// list박스를 클릭하면 onClass
$(".content ul.list li").click(function(e){
  e.preventDefault();
  $(".content ul.list li").removeClass("on");
  $(this).addClass("on");
})