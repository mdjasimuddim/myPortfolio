$(document).ready(function() {
    $('.project-popup').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
        }
    });
  });
  
  $(document).ready(function() {
    $('.video').magnificPopup({
        type:'iframe'
    });
  });
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

$(document).ready(function(){
    $('.testimonials').slick({
        prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
        dots: true
    });
  });