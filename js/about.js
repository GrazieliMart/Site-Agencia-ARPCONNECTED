$(document).ready(function() {
    $(".overlaytop").fadeOut(2000);
    
    $(window).on('scroll', function() {
      $('.info-box').each(function() {
        const boxTop = $(this).offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();

        if (boxTop < windowBottom) {
          $(this).addClass('show');
        }
      });
    });
});