$(function(){
  //링크이동 금지
  $("a").on("click", function(e){
      e.preventDefault();
  })
    $('.menu_slide').slick({
    autoplay: true,
    slidesToShow: 2,
    arrows: false,
    dots: true
  });
})