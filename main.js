/* 스크롤 진행 상황 */
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

/* home section text */
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

/* mobile - side toggle button */
$('.side_toggle_button').click(function (event) {
    event.stopPropagation(); //부모태그로의 이벤트 stop
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
        }, 100);
        const bar4Animation = setInterval(() => {
            bar4.style.width = t + '%';
            t++ >= jqTotal && clearInterval(bar4Animation);
        }, 00);
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
function checkVisible(elm, eval) {
    eval = eval || 'object visible';
    let viewportHeight = $(window).height();
    let scrolltop = $(window).scrollTop();
    let y = $(elm).offset().top;
    let elementHeight = $(elm).height();

    if (eval == 'object visible') return y < viewportHeight + scrolltop && y > scrolltop - elementHeight;
    if (eval == 'above') return y < viewportHeight + scrolltop;
}
