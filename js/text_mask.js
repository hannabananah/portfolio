$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $(".section").addClass("txt_mask");
  }
});