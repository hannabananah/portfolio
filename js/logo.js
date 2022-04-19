$(document).mousemove(function(e) {
    var $width = ($(document).width()) / 255;
    var $height = ($(document).height()) / 255;
    var $X = parseInt(e.pageX / $width+150);
    var $Y = parseInt(e.pageY / $height+210);
    var $Z = parseInt(e.pageX / Math.random(), 10);
    $(".effect").css("color", "rgb(" + $X + "," + $Y + "," + $X + ")");
  });