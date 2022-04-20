$(document).mousemove(function(e) {
    var $width = ($(document).width()) / 255;
    var $height = ($(document).height()) / 255;
    var $X = parseInt(e.pageX / $width+200);
    var $Y = parseInt(e.pageY / $height+100);
    var $Z = parseInt(e.pageX / $height+50);
    $(".effect").css("color", "rgba(" + $X + "," + $Y + "," + $Z + ","+"0.8");
  });