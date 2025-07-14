$(function(){
    $(".tabnav>ul>li").click(function(){
        $(".tabnav>ul>li").removeClass("on")
        $(this).addClass("on")
    })
})