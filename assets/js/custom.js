
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });

    // BACKSTRETCH SLIDESHOW
    $('.hero-section').backstretch([
      "images/slideshow/fotstud.JPG", 
      "images/slideshow/pelantikan.JPG",
      "images/slideshow/pelantikan2.JPG",
      "images/slideshow/pelantikan3.JPG",
      "images/slideshow/pelantikan4.JPG",
      "images/slideshow/pelantikan5.JPG",
      "images/slideshow/pelantikan6.JPG",
      "images/slideshow/pelantikan7.JPG",
      "images/slideshow/pelantikan8.JPG",
      "images/slideshow/pelantikan9.JPG",
      "images/slideshow/pelantikan10.JPG",
    ],  {duration: 2000, fade: 750});
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
  
      scrollToDiv(elWrapped);
      return false;
  
      function scrollToDiv(element){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
    
  })(window.jQuery);


