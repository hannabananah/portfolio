jQuery.easing.def = 'easeOutCubic';
//
var active = false;
var myTime;
var myTime2;

$(".btnStyles").addClass('off');


// 깃허브, 이력서 버튼
$(".main_btn1 .AppGNB" ).click(function() {
  if (!active) {
    active = true;
    $(".main_btn1 .btnStyles").removeClass('off');
    $(".main_btn1 .AppGNB").addClass('on');
    $(".main_btn1 .btnStyles").addClass('on');
    $(".main_btn1 .btnParent").addClass('on');
    myTime2 = setTimeout(function(){
      $(".main_btn1 .btnStyles").addClass('shadow');
    }, 150);
    clearTimeout(myTime3);
  } else {
    active = false;
    $(".main_btn1 .AppGNB").removeClass('on');
    $(".main_btn1 .btnStyles").addClass('off');

    myTime3 = setTimeout(function(){
      $(".main_btn1 .btnStyles").removeClass('shadow');
      $(".main_btn1 .btnStyles").removeClass('on');
      $(".main_btn1 .btnParent").removeClass('on');
    }, 200);
    clearTimeout(myTime0);
    clearTimeout(myTime1);
    clearTimeout(myTime2);
  }
})

// 포트폴리오 제작과정
;$(".main_btn2 .AppGNB" ).click(function() {
  if (!active) {
    active = true;
    $(".main_btn2 .btnStyles").removeClass('off');
    $(".main_btn2 .AppGNB").addClass('on');
    $(".main_btn2 .btnStyles").addClass('on');
    $(".main_btn2 .btnParent").addClass('on');
    myTime2 = setTimeout(function(){
      $(".main_btn2 .btnStyles").addClass('shadow');
    }, 150);
    clearTimeout(myTime3);
  } else {
    active = false;
    $(".main_btn2 .AppGNB").removeClass('on');
    $(".main_btn2 .btnStyles").addClass('off');

    myTime3 = setTimeout(function(){
      $(".main_btn2 .btnStyles").removeClass('shadow');
      $(".main_btn2 .btnStyles").removeClass('on');
      $(".main_btn2 .btnParent").removeClass('on');
    }, 200);
    clearTimeout(myTime0);
    clearTimeout(myTime1);
    clearTimeout(myTime2);
  }
});

// 다이어리 보기
;$(".main_btn3 .AppGNB" ).click(function() {
  if (!active) {
    active = true;
    $(".main_btn3 .btnStyles").removeClass('off');
    $(".main_btn3 .AppGNB").addClass('on');
    $(".main_btn3 .btnStyles").addClass('on');
    $(".main_btn3 .btnParent").addClass('on');
    myTime2 = setTimeout(function(){
      $(".main_btn3 .btnStyles").addClass('shadow');
    }, 150);
    clearTimeout(myTime3);
  } else {
    active = false;
    $(".main_btn3 .AppGNB").removeClass('on');
    $(".main_btn3 .btnStyles").addClass('off');

    myTime3 = setTimeout(function(){
      $(".main_btn3 .btnStyles").removeClass('shadow');
      $(".main_btn3 .btnStyles").removeClass('on');
      $(".main_btn3 .btnParent").removeClass('on');
    }, 200);
    clearTimeout(myTime0);
    clearTimeout(myTime1);
    clearTimeout(myTime2);
  }
});