$(document).ready(function() {
	

$(window).scroll(function (event) {
var st = $(this).scrollTop();
var ss = $(".about").offset().top;
    if (st < ss) {
        $('.dautrang img').animate({top: st/3}, 0);
    }
    else {
        $('.dautrang img').animate({top: ss/3}, 0);
    }

    if (st > 0) {
        $(".dautrang nav").addClass("bg-dark");
    }
    else {
        $(".dautrang nav").removeClass("bg-dark");
    }

});
});