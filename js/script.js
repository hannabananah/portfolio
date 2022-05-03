const topmenu = $("nav ul.gnb>li");
const sections = $(".section");
const speed = 500;
//click button and move
topmenu.click(function (e) {
  e.preventDefault();
  let target = $(this);
  let index = target.index();
  let section = $(".section").eq(index);
  let offset = section.offset().top;
  $("html,body").animate({ scrollTop: offset }, 100, "easeOutCirc");
});

//스크롤이벤트
$(window).on("scroll", function () {
  let scrollTop = $(window).scrollTop();
  sections.each(function (i, o) {
    if (scrollTop >= sections.eq(i).offset().top - speed) {
      $("nav ul.gnb li")
        .eq(i)
        .addClass("active")
        .siblings()
        .removeClass("active");
    } else if (scrollTop >= sections.eq(2).offset().top - speed) {
      sections.eq(2).find(".left").addClass("in");
      sections.eq(2).find(".right").addClass("in");
      sections.eq(2).find("span").addClass("show");
	  sections.eq(2).find(".img_box").addClass("show");
      sections.eq(2).find("img.logo").addClass("show");
    }
  });
  sections.each(function (i, o) {
    if (scrollTop >= sections.eq(i).offset().top - speed) {
      $("nav ul.gnb li")
        .eq(i)
        .addClass("active")
        .siblings()
        .removeClass("active");
    } else if (scrollTop >= sections.eq(3).offset().top - speed) {
      sections.eq(3).find(".right").addClass("in");
      sections.eq(3).find("span").addClass("show");
      sections.eq(3).find(".img_box").addClass("show");
      sections.eq(3).find("img.logo").addClass("show");
      sections.eq(3).find("a").addClass("show");
    }
  });
  sections.each(function (i, o) {
    if (scrollTop >= sections.eq(i).offset().top - speed) {
      $("nav ul.gnb li")
        .eq(i)
        .addClass("active")
        .siblings()
        .removeClass("active");
    } else if (scrollTop >= sections.eq(4).offset().top - speed) {
      sections.eq(4).find(".right").addClass("in");
      sections.eq(4).find("span").addClass("show");
      sections.eq(4).find(".img_box").addClass("show");
      sections.eq(4).find("img.logo").addClass("show");
      sections.eq(4).find("a").addClass("show");
    }
  });
  sections.each(function (i, o) {
    if (scrollTop >= sections.eq(i).offset().top - speed) {
      $("nav ul.gnb li")
        .eq(i)
        .addClass("active")
        .siblings()
        .removeClass("active");
    } else if (scrollTop >= sections.eq(5).offset().top - speed) {
      sections.eq(5).find(".right").addClass("in");
      sections.eq(5).find("span").addClass("show");
      sections.eq(5).find(".img_box").addClass("show");
      sections.eq(5).find("img.logo").addClass("show");
      sections.eq(5).find("a").addClass("show");
    }
  });
  sections.each(function (i, o) {
    if (scrollTop >= sections.eq(i).offset().top - speed) {
      $("nav ul.gnb li")
        .eq(i)
        .addClass("active")
        .siblings()
        .removeClass("active");
    } else if (scrollTop >= sections.eq(6).offset().top - speed) {
      sections.eq(6).find(".project5_left").addClass("in");
      sections.eq(6).find("span").addClass("show");
	  sections.eq(6).find(".img_box").addClass("show");
      sections.eq(6).find("img.logo").addClass("show");
    }
  });
  sections.each(function (i, o) {
    if (scrollTop >= sections.eq(i).offset().top - speed) {
      $("nav ul.gnb li")
        .eq(i)
        .addClass("active")
        .siblings()
        .removeClass("active");
    } else if (scrollTop >= sections.eq(7).offset().top - speed) {
      sections.eq(7).find(".right").addClass("in");
      sections.eq(7).find("span").addClass("show");
      sections.eq(7).find(".img_box").addClass("show");
      sections.eq(7).find("img.logo").addClass("show");
      sections.eq(7).find("a").addClass("show");
    }
  });
});
// project  screen scroll event
$(".hidden").hover(
  function () {
    let ah = $(this).innerHeight();
    let img = $(this).find("img");
    let imgh = img.innerHeight();
    img.stop().animate({ top: ah - imgh }, 5000);
  },
  function () {
    let img = $(this).find("img");
    img.stop().animate({ top: 0 }, 3000);
  }
);

// copy email
function email() {
  var $emailBtn = $("#contactme .address button");

  $emailBtn.on("click", function (e) {
    var text = $("#contactme .address strong").text();
    $("#clipTarget").val(text);
    $("#clipTarget").select();

    try {
      var successful = document.execCommand("copy");
      alert("복사완료");
    } catch (err) {
      alert("이 브라우저는 지원하지 않습니다.");
    }
  });
}
email();
