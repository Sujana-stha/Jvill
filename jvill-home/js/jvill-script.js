$(document).ready(function() {
	$(window).scroll(function() {
		var windscroll = $(window).scrollTop();
	    if (windscroll >= 110) {
	       /* $('.').addClass('fixed');*/
	        $('nav').addClass("navbar-fixed-top");
          $(".right").addClass("fix");
          $(".lang").addClass("fix");

	    } else {
	        $('.navigation').removeClass('fixed');

	        $('nav').removeClass("navbar-fixed-top");
          $(".right").removeClass("fix");
          $(".lang").removeClass("fix");


	    }
	}).scroll();
	/*$(document).on("scroll", function() {
	    $(".blog #post1").addClass("animated fadeInLeft");
	    $(".blog #post2").addClass("animated fadeInDown");
	    $(".blog #post3").addClass("animated fadeInRight");
  });  */

  $(".right .sign-up").hide();
  $(".right li").mouseenter(function(){
  	$(this).children(".sign-up").show();
  });

  $(".right li").mouseleave(function(){
  	$(this).children(".sign-up").hide();
  });
/*
  $(".multiple-lang").hide();
*/
  /*$(".lang").click(function(e) {
  	e.preventDefault();
  	$(".lang").siblings(".multiple-lang").show();
  });
*/
  /*$(".lang").mouseleave(function(e) {
  	e.preventDefault();
  	$(".lang").siblings(".multiple-lang").hide();
  });*/

  $(".lang").hover(function(){
    $('.multiple-lang').removeClass('hidden');
  },function(){
    $('.multiple-lang').addClass('hidden');
  });
});