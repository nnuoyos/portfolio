/* 모바일 사이즈 - 페이지 하단 toggle button */
//변수 지정
const toggleBtn = document.querySelector('.side_toggle_button');
const menu_list = document.querySelector('.toggle_menu_list');
//toggle button click 
toggleBtn.addEventListener('click', (event)=>{
    menu_list.classList.toggle('active');
    event.currentTarget.classList.toggle('active-1');
});

/* toggle button click시 해당 영역으로 스크롤 이동 */
$(function (){
    $('toggle_menu_list > li ').click(function(){
        $('html, body').animate({scrollTop: $(this.hash).offset.top}, 300);
    });
});