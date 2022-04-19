$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    if (wScroll > 30) {
         $('.gnb').addClass('pos-fixed');
    } else {
         $('.gnb').removeClass('pos-fixed');
    }
});