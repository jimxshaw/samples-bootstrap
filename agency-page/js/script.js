// Forces the top nav bar to turn gray as the page scrolls down

$(window).scroll(function() {
  if ($('.navbar').offset().top > 50) {
    $('.navbar-fixed-top').addClass('top-nav-collapse');
  }
  else {
    $('.navbar-fixed-top').removeClass('top-nav-collapse');
  }
});

/*
By clicking any of the nav bar links, the app will
slide with ease to the appropriate section as opposed to
jumping to the section instantaneously
*/

$(function() {
  $('.page-scroll a').bind('click', function() {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});






























