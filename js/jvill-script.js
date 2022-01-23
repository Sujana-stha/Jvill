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
	

  $(".right .sign-up").hide();
  $(".right li").mouseenter(function(){
  	$(this).children(".sign-up").show();
  });

  $(".right li").mouseleave(function(){
  	$(this).children(".sign-up").hide();
  });


  $(".lang").hover(function(){
    $('.multiple-lang').removeClass('hidden');
  },function(){
    $('.multiple-lang').addClass('hidden');

  });


  $('.feature-content[data-type="multi"] .item').each(function(){
  /*var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    
    next.children(':first-child').clone().appendTo($(this));
  }*/
  var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
  
      if (next.next().length>0) {
        next.next().children(':first-child').clone().appendTo($(this));
      }
      else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
      }
});
});