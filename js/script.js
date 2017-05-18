

 $("#hamburger").click(function(){
    $(".line-1").toggleClass("active_line_1");
    $(".line-2").toggleClass("active_line_2");
    $(".line-3").toggleClass("active_line_3");
    $("#menu").toggleClass("menu_active");

 });

$("#hamburger").mouseover(function(){
    $(".line-1").addClass("anim_line_1");
    $(".line-3").addClass("anim_line_3");
});
$("#hamburger").mouseout(function(){
     $(".line-1").removeClass("anim_line_1");
     $(".line-3").removeClass("anim_line_3");
});


$(document).mousemove(function(e){
    var X = e.pageX; 
    var Y = e.pageY; 
    

if (X<80) {
   $("#slidebar").addClass("slidebar_anim");
}
else {
    $("#slidebar").removeClass("slidebar_anim");
}
});  


