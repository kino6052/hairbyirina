$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  $('li').hover(
    function(){ // hover on
        $(this).animate({backgroundColor: "#fff"}, 500);
        $(this).find("a").animate({color: "#000"}, 500);
    },
    function(){ // hover out
        $(this).animate({backgroundColor: "#000"}, 500);
        $(this).find("a").animate({color: "#fff"}, 500);
    });
});