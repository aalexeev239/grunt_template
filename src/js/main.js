// Андрей Алексеев [AA]
// alexeev.andrey.a@gmail.com


// эффект тряски
  $.fn.shake = function(intShakes, intDistance, intDuration) {
      this.each(function() {
          $(this).css("position","relative"); 
          for (var x=1; x<=intShakes; x++) {
          $(this).animate({left:(intDistance*-1)}, (((intDuration/intShakes)/4)))
      .animate({left:intDistance}, ((intDuration/intShakes)/2))
      .animate({left:0}, (((intDuration/intShakes)/4)));
      }
    });
  return this;
  };


$(document).ready(function() {

 //smoothscroll
 $('a[href*=#]:not([href=#]):not(.js-form-return):not(.inline-tabs__link):not(.accordion__control)').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          // scrollTop: target.offset().top
          scrollTop: target.offset().top - 87
        }, 1500);
        return false;
      }
    }
  });

});
// END doc.ready