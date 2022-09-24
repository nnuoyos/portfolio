/* mobile - side toggle button */
$('.side_toggle_button').click(function(event){
    event.stopPropagation(); //부모태그로의 이벤트 stop
    $('.toggle_menu').slideToggle();
});  

/* toggle button click시 해당 영역으로 스크롤 이동 */
$(function (){
    $('toggle_menu_list > li ').click(function(event){
        event.preventDefault();
        x = $(this).attr("href");
        $('html, body').stop().animate({scrollTop: $(x).offset().top-140}, 1000);
    });
});
