const topmenu=$('nav ul.gnb>li');

// 버튼클릭시 이동
topmenu.click(function (e) {
	e.preventDefault(); //#의 기본 기능을 차단
	let target = $(this); //사용자가 클릭한 버튼의 타겟이 저장
	let index = target.index(); //인덱스를 부여하여 저장
	let section = $(".section").eq(index);
	let offset = section.offset().top; //offset() : 요소의 위치(문서)
	$("html, body").animate({ scrollTop: offset }, 2000, "easeOutCirc"); //offset 값을 scrollTop에 대입(애니메이션)
});

// 스크롤이벤트
$(window).scroll(function(){
    let scrollTop=$(window).scrollTop();
    if (scrollTop+500 >= $("#section1").offset().top - 500) {
        $("nav ul.gnb li").eq(0).addClass("active").siblings().removeClass("active");
    }
    if (scrollTop >= $("#section2").offset().top - 500) {
        $("nav ul.gnb li").eq(1).addClass("active").siblings().removeClass("active");
    }
    if (scrollTop >= $("#section3").offset().top - 500) {
        $("nav ul.gnb li").eq(2).addClass("active").siblings().removeClass("active");
    }
    if (scrollTop >= $("#section4").offset().top - 500) {
        $("nav ul.gnb li").eq(3).addClass("active").siblings().removeClass("active");
    }
    if (scrollTop >= $("#section5").offset().top - 500) {
        $("nav ul.gnb li").eq(4).addClass("active").siblings().removeClass("active");
    }
    if (scrollTop >= $("#section6").offset().top - 500) {
        $("nav ul.gnb li").eq(5).addClass("active").siblings().removeClass("active");
    }
})

// 목업스크롤이벤트
$(".hidden").hover(
    function(){
        let ah=$(this).innerHeight();
        let img=$(this).find('img');
        let imgh=img.innerHeight();
        // console.log(`a높이:${ah}img높이:${imgh}`);
        img.stop().animate({top:ah-imgh},8000)
    },
	function () {
        let img = $(this).find("img")
        img.stop().animate({ top: 0 }, 5000);
      }
    )