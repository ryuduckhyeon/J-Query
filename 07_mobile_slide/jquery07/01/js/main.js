$(function(){
    //자바스크립트 소스 삽입
    const swiper = new Swiper('.swiper', {
  // Optional parameters
  //슬라이드 방향 바꿈
  //   direction: 'vertical',
  // direction: 'horizontal',
  // 슬라이드를 fadein 효과
  effect:'fade',
  loop: true,

  //슬라이드 자동 실행
  autoplay:{
    delay:3000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // 페이지버튼 클릭시 해당 슬라이드로 이동
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
})