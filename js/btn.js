jQuery.easing.def = 'easeOutCubic';
//
var active = false;
var myTime;
var myTime2;

$(".btnStyles").addClass('off');

$( ".AppGNB" ).click(function() {
  if (!active) {
    active = true;
    $(".btnStyles").removeClass('off');
    $(".AppGNB").addClass('on');
    $(".btnStyles").addClass('on');
    $(".btnParent").addClass('on');
    myTime2 = setTimeout(function(){
      $(".btnStyles").addClass('shadow');
    }, 150);
    clearTimeout(myTime3);
  } else {
    active = false;
    $(".AppGNB").removeClass('on');
    $(".btnStyles").addClass('off');

    myTime3 = setTimeout(function(){
      $(".btnStyles").removeClass('shadow');
      $(".btnStyles").removeClass('on');
      $(".btnParent").removeClass('on');
    }, 200);
    clearTimeout(myTime0);
    clearTimeout(myTime1);
    clearTimeout(myTime2);
  }
});