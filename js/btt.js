var amountScrolled = 750;
$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled) {
    $('.back_to_top').addClass('show');
  } else {
    $('.back_to_top').removeClass('show');
  }
});
$('.back_to_top').click(function() {
  $('body,html').animate({
    scrollTop: 0
  }, 100, 'easeOutQuint');
  return false;
});
