//create parallax effect on header bg and nav logo
function parallax() {
  var scrolled = $(window).scrollTop();
  var windowWidth = $(window).width();
  $('header').css('top', -(scrolled*0.2)+'px');
  if(windowWidth<751) {
    $('nav').css('top', -(scrolled*0.3)+'px');
  } else {
    $('nav').css('top', '0px');
  };
}

//for lg screen only: increase nav opacity when scrolled below header
function navOpacity() {
  var scrolled = $(window).scrollTop();
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var navHeight = $('nav').height();
  if(windowWidth>750 && scrolled>(windowHeight-navHeight)) {
    $('nav').css('background', 'rgba(0, 191, 255, 0.5)');
  } else {
    $('nav').css('background', 'rgba(0, 191, 255, 0)');
  };
}

//scroll functions
$(window).scroll(function(e) {
  parallax();
  navOpacity();
});
