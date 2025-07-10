$(function(){
    // 주메뉴를 클릭하면 2단 메뉴를 열리게끔
    $(".box>ul>li>a").click(function(){
        $(this).next().slideToggle(300);
        $(this).parent().siblings().children("ul").slideUp(300);
    })
})