//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

    if ($(".navbar").offset().top > 150) {
        $('#to-top').addClass('active');
    } else {
        $('#to-top').removeClass('active');
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$('.bgParallax').each(function(){
    var $obj = $(this);
 
    $(window).scroll(function() {
        var yPos = -($(window).scrollTop() / $obj.data('speed')); 
 
        var bgpos = '50% '+ yPos + 'px';
 
        $obj.css('background-position', bgpos );
 
    }); 
});

$('#carousel-depoimentos').carousel({
  interval: 5000
})

$('.carousel .item').each(function(){
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

new WOW().init();