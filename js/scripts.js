$(document).ready(function() {
	$('.tab-section').hide();
    $('.tabs-nav li a').bind('click', function(e){
        $('.tabs-nav li a.current').removeClass('current');
        $('.tab-section:visible').hide();
        $(this.hash).show();
        $(this).addClass('current');
        e.preventDefault();
    }).filter(':first').click();

    //$('.mm').hide();
    //$('.nav-main li a').click(function(e) {
    //	$('.mm').slideToggle('slow');
    //	e.preventDefault();
   //});
    $('.nav-icon').click(function(){
        var slideoutMenu = $('.mobile-nav');
        var pagebody = $('.container');      
        // toggle open class
        slideoutMenu.toggleClass("open");
        
        // slide menu
        if (slideoutMenu.hasClass("open")) {
            slideoutMenu.animate({
                right: "0px",
                queue : false
            });
            pagebody.animate({
                left: "-300px",
                queue : false
            });   
        } else {
            slideoutMenu.animate({
                right: "-300px",
                queue : false
            });
            pagebody.animate({
                left: "0",
                queue : false
            }); 
        }
    });
    // slide up menu items
    $('.mobile-nav li a').click(function(){
        if ($(this).attr('class') != 'active'){
          $('.mobile-nav li ul').slideUp('slow');
          $(this).next().slideToggle('slow');
          $('.mobile-nav li a').removeClass('active');
          $(this).addClass('active');
      }
  });
    $(window).resize(function() {
      windowsize = $(window).width();
      if (windowsize > 1020) {
          $('.mobile-nav').css('right', '-300px');
          $('.container').css('left', '0px');
      }
    });



});