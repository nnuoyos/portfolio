/* 스크롤 진행 상황 표시하기*/
const progressTag = document.querySelector('.scroll_progress')
const progressText = document.querySelector('.scroll_progress > p')
const bodyTag = document.querySelector('body')

document.addEventListener('scroll', () => {
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalHeight = pageHeight - window.innerHeight
  const percentage = pixels / totalHeight
  progressTag.style.width = `${100 * percentage}%`

  if (pixels > 0) {
    progressText.innerHTML = `${Math.floor(100 * percentage)}` + '%'
  } 
  else {
    progressText.innerHTML = ''
  }
})

/* home section text 효과 */
const container = document.querySelector('.home_container');
document.body.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY - 35;
    gsap.to(container, {
        y: y,
    });
    gsap.to('.home_menu_mask', {
        y: -y,
    });
});

/* intro typing */
const $text = document.querySelector(".intro_text");
const content = "늘 새로운 도전을 꿈꾸는\n프론트엔드 개발자 장소영 입니다"
let index = 0;

/*  function sleep(delay){ 
     const start = new Date().getTime(); 
     while (new Date().getTime() < start + delay); 
    } */

function typing(){
    $text.innerHTML += content[index];
    index++;
    if(content[index]==="\n"){
        $text.innerHTML += "<br/>";
        index++;
    }
    //1.5 초 후 다시 실행
    if(index > content.length){
        $text.textContent = ""
        index = 0;
        /* sleep(1500); */
    }
}
setInterval(typing, 200)

/* mobile size - side toggle button */
$('.side_toggle_button').click(function (event) {
    //event.stopPropagation(); //부모태그로의 이벤트 stop
    $('.toggle_menu').slideToggle();
});

/* toggle button & navbar menu click시 해당 영역으로 스크롤 이동 */
$(function () {
    $('toggle_menu_list li ').click(function (event) {
        event.preventDefault();
        x = $(this).attr('href');
        $('html, body')
            .stop()
            .animate({ scrollTop: $(x).offset().top - 100 }, 4000);
    });
});

/* tech skill progress */
const bar1 = document.querySelector('#html_bar .progress');
const bar2 = document.querySelector('#css_bar .progress');
const bar3 = document.querySelector('#js_bar .progress');
const bar4 = document.querySelector('#jq_bar .progress');
const bar5 = document.querySelector('#react_bar .progress');
const bar6 = document.querySelector('#bt_bar .progress');

let htmlTotal = 80;
let cssTotal = 85;
let jsTotal = 65;
let jqTotal = 68;
let reactTotal = 60;
let btTotal = 70;

let t = 0;
bar1.style.width = 0;
bar2.style.width = 0;
bar3.style.width = 0;
bar4.style.width = 0;
bar5.style.width = 0;
bar6.style.width = 0;

let isVisible = false;
$(window).on('scroll', function () {
    if (checkVisible($('#css_bar')) && !isVisible) {
        const barAnimation = setInterval(() => {
            bar1.style.width = t + '%';
            t++ >= htmlTotal && clearInterval(barAnimation);
        }, 70);
        const bar2Animation = setInterval(() => {
            bar2.style.width = t + '%';
            t >= cssTotal && clearInterval(ba2rAnimation);
        },70);
        const bar3Animation = setInterval(() => {
            bar3.style.width = t + '%';
            t++ >= jsTotal && clearInterval(bar3Animation);
        }, 80);
        const bar4Animation = setInterval(() => {
            bar4.style.width = t + '%';
            t++ >= jqTotal && clearInterval(bar4Animation);
        }, 80);
        const bar5Animation = setInterval(() => {
            bar5.style.width = t + '%';
            t++ >= reactTotal && clearInterval(bar5Animation);
        }, 90);
        const bar6Animation = setInterval(() => {
            bar6.style.width = t + '%';
            t++ >= btTotal && clearInterval(bar6Animation);
        }, 90);
        isVisible = true;
    }
});
//해당 영역으로 접근 시 프로그레스 bar 차오르게 하기
function checkVisible(elm, eval) {
    eval = eval || 'object visible';
    let viewportHeight = $(window).height();
    let scrolltop = $(window).scrollTop();
    let y = $(elm).offset().top;
    let elementHeight = $(elm).height();

    if (eval == 'object visible') return y < viewportHeight + scrolltop && y > scrolltop - elementHeight;
    if (eval == 'above') return y < viewportHeight + scrolltop;
}

/* pop up */
/* function ready(){
    //취소 버튼 누르면 페이지 종료 되기
    if(!confirm("본 사이트는 상업적 목적이 아닌 개인 포트폴리오 용도로 제작 되었습니다. 홈페이지 일부 내용과 기타 이미지 등은 출처가 있음을 밝힙니다.")){
      window.close();
    //확인 버튼 누르면 alert 으로 환영 메세지 띄우기
    }else{
      alert("신입 프론트엔드 개발자 장소영의 포트폴리오를 보러와 주셔서 감사합니다!");
    }
  }
  document.addEventListener('DOMContentLoaded',ready); //DOMContentLoaded : q스택에서 렌더가 다 되고 페이지 뜨기 직전의 타이밍에 ready함수 실행 */

/* modal event */
//모달창이 띄워졌을 때 스크롤 막아놓기
/* jQuery(document).ready(function(){
  $("#modal").show();
  $('#modal').on('scroll touchmove mousewheel', function(event){
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
});
function closeModal(){
  $('.modal_container').hide();
} */