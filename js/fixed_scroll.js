$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    if (wScroll > 800) {
         $('.gnb').addClass('pos-fixed');
    } else {
         $('.gnb').removeClass('pos-fixed');
    }
});